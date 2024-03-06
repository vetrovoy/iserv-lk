// User
export type TUser = {
  Username: string;
  Password: string;
  ExtToken?: string;
};

export type TUserLogOnResponse = {
  success: boolean;
  extToken?: string;
  msg?: string;
};

export type TUserLogOnRequest = TUser;

// Subscr
export type TSubscr = {
  SubscrId: string;
  OrgId: number;
  SubscrCode: number;
  FIO: string;
  Address: string;
};

export type TSubscrResponse = {
  success: boolean;
  results: TSubscr[];
  msg?: string;
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
  SubscrId: string;
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
  msg?: string;
};

export type TChargeRequest = {
  ExtToken: string;
  PeriodBegin: string;
  PeriodEnd: string;
};

// Payment
export type TPayment = {
  PaymenId: number;
  SubscrId: string;
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
  results: TPayment[];
  msg?: string;
};

export type TPaymentRequest = {
  ExtToken: string;
  SubscrId: string;
  PeriodBegin: string;
  PeriodEnd: string;
};
