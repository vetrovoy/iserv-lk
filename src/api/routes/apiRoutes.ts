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
