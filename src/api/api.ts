import { Config } from "./config/config";
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

export default class API extends Config {
  private userRepository: UserRepository;
  private subscrsRepository: SubscrsRepository;
  private paymentsRepository: PaymentsRepository;
  private chargesRepository: ChargesRepository;

  constructor() {
    super();

    this.userRepository = new UserRepository();
    this.subscrsRepository = new SubscrsRepository();
    this.paymentsRepository = new PaymentsRepository();
    this.chargesRepository = new ChargesRepository();
  }

  public logOn({ Username, Password }: TUserLogOnRequest) {
    return this.userRepository.logOn({ Username, Password });
  }

  public getSubscrs({ ExtToken }: TSubscrRequest) {
    return this.subscrsRepository.getSubscrs({ ExtToken });
  }

  public getPayments({
    ExtToken,
    SubscrId,
    PeriodBegin,
    PeriodEnd,
  }: TPaymentRequest) {
    return this.paymentsRepository.getPayments({
      ExtToken,
      SubscrId,
      PeriodBegin,
      PeriodEnd,
    });
  }

  public getCharges({ ExtToken, PeriodBegin, PeriodEnd }: TChargeRequest) {
    return this.chargesRepository.getCharges({
      ExtToken,
      PeriodBegin,
      PeriodEnd,
    });
  }
}
