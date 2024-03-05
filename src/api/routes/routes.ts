import LogOnExtData from "../db/Ext/LogOnExt/index.json";
import GetChargesExtData from "../db/Ext/GetChargesExt/index.json";
import GetPaymentsExtData from "../db/Ext/GetPaymentsExt/index.json";
import GetSubscrsExtData from "../db/Ext/GetSubscrsExt/index.json";

type IEndpoints = {
  LogOnExt: string;
  GetChargesExt: string;
  GetPaymentsExt: string;
  GetSubscrsExt: string;
};

export type TEndpoint = keyof IEndpoints;

export type TRoute = {
  matcher: TEndpoint;
  data: object;
  status: number;
};

const routes: TRoute[] = [
  {
    matcher: "LogOnExt",
    data: LogOnExtData,
    status: 200,
  },
  {
    matcher: "GetChargesExt",
    data: GetChargesExtData,
    status: 200,
  },
  {
    matcher: "GetPaymentsExt",
    data: GetPaymentsExtData,
    status: 200,
  },
  {
    matcher: "GetSubscrsExt",
    data: GetSubscrsExtData,
    status: 200,
  },
];

export { routes };
