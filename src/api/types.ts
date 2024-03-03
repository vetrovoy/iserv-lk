// User
export type TUser = {
  Username: string;
  Password: string;
};

export type TUserLogOnResponse = {
  success: boolean;
  msg: string;
};

export type TUserLogOnRequest = TUser;

// Subscr
export type TSubscr = {
  SubscrId: number;
  OrgId: number;
  SubscrCode: number;
  FIO: string;
  Address: string;
};

export type TSubscrResponse = {
  success: boolean;
  results: TSubscr[];
};

export type TSubscrRequest = {
  ExtToken: string;
};

//  Change
export type TChargeDetail = {
  ChargeDetailId: number;
  GroupName: string;
  Name: string;
  Quantity: number;
  Tariff: number;
  UnitName: string;
  Total: number;
  Amount: number;
  Recalc: number;
  ImpSaldoInfo: string;
};

export type TCharge = {
  ChargeId: number;
  SubscrId: number;
  Period: number;
  PeriodName: string;
  DebtByBeginMonth: number;
  Amount: number;
  Payment: number;
  AmountToPay: number;
  ChargeDetails: TChargeDetail[];
};

export type TChargeResponse = {
  success: boolean;
  results: TCharge[];
};

export type TChargeRequest = {
  ExtToken: string;
  PeriodBegin: number;
  PeriodEnd: number;
};

// Payment
export type TPayment = {
  PaymenId: number;
  SubscrId: number;
  Date: string;
  PostDate: string;
  Period: number;
  PeriodName: string;
  ServiceGroupName: string;
  PaymentSource: string;
  Amount: number;
};

export type TPaymentResponse = {
  success: boolean;
  result: TPayment[];
};

export type TPaymentRequest = {
  ExtToken: string;
  subscrId: number;
  PeriodBegin: number;
  PeriodEnd: number;
};
