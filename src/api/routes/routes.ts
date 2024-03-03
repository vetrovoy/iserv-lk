import LogOnExtData from "../db/Ext/LogOnExt/index.json";
import GetChargesExtData from "../db/Ext/GetChargesExt/index.json";
import GetPaymentsExtData from "../db/Ext/GetPaymentsExt/index.json";
import GetSubscrsExtData from "../db/Ext/GetSubscrsExt/index.json";

export type TEndpoint =
  | "/Ext/LogOnExt"
  | "/Ext/GetChargesExt"
  | "/Ext/GetPaymentsExt"
  | "/Ext/GetSubscrsExt";

export type TEndpoints = {
  [key: string]: TEndpoint;
};

const endpoints: TEndpoints = {
  LogOnExt: "/Ext/LogOnExt",
  GetChargesExt: "/Ext/GetChargesExt",
  GetPaymentsExt: "/Ext/GetPaymentsExt",
  GetSubscrsExt: "/Ext/GetSubscrsExt",
};

export type Route = {
  matcher: TEndpoint;
  data: object;
  status: number;
};

const routes: Route[] = [
  {
    matcher: endpoints["LogOnExt"],
    data: LogOnExtData,
    status: 200,
  },
  {
    matcher: endpoints["GetChargesExt"],
    data: GetChargesExtData,
    status: 200,
  },
  {
    matcher: endpoints["GetPaymentsExt"],
    data: GetPaymentsExtData,
    status: 200,
  },
  {
    matcher: endpoints["GetSubscrsExt"],
    data: GetSubscrsExtData,
    status: 200,
  },
];

export { routes, endpoints };
