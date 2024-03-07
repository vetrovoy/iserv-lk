import { Config } from "../../config/config";
import { TPaymentRequest, TPaymentResponse } from "../../types";

export class PaymentsRepository extends Config {
  public async getPayments({
    ExtToken,
    SubscrId,
    PeriodBegin,
    PeriodEnd,
  }: TPaymentRequest): Promise<TPaymentResponse> {
    try {
      await this.throttle();

      const response = await this.request<TPaymentResponse>("GetPaymentsExt", {
        ExtToken,
        SubscrId,
        PeriodBegin,
        PeriodEnd,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
