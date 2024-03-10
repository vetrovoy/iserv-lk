import {
  ChargesRepository,
  UserRepository,
  PaymentsRepository,
  SubscrsRepository,
} from "./repository";
import {
  TChargeRequest,
  TPaymentRequest,
  TSubscrRequest,
  TUserLogOnRequest,
} from "./types";

export default class API {
  private userRepository: UserRepository;
  private subscrsRepository: SubscrsRepository;
  private paymentsRepository: PaymentsRepository;
  private chargesRepository: ChargesRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.subscrsRepository = new SubscrsRepository();
    this.paymentsRepository = new PaymentsRepository();
    this.chargesRepository = new ChargesRepository();
  }

  public user = {
    logOn: ({ Username, Password }: TUserLogOnRequest) => {
      return this.userRepository.logOn({ Username, Password });
    },
  };

  public subscr = {
    getSubscrs: ({ ExtToken }: TSubscrRequest) => {
      return this.subscrsRepository.getSubscrs({ ExtToken });
    },
  };

  public payments = {
    getPayments: ({
      ExtToken,
      SubscrId,
      PeriodBegin,
      PeriodEnd,
    }: TPaymentRequest) => {
      return this.paymentsRepository.getPayments({
        ExtToken,
        SubscrId,
        PeriodBegin,
        PeriodEnd,
      });
    },
  };

  public charges = {
    getCharges: ({ ExtToken, PeriodBegin, PeriodEnd }: TChargeRequest) => {
      return this.chargesRepository.getCharges({
        ExtToken,
        PeriodBegin,
        PeriodEnd,
      });
    },
  };
}
