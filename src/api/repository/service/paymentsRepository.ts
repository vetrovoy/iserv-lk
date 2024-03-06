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

      const filtered = response.data.results.filter(
        (payment) =>
          payment.Period >= parseInt(PeriodBegin) &&
          payment.Period <= parseInt(PeriodEnd) &&
          payment.SubscrId === SubscrId,
      );

      const result = {
        success: response.data.success,
        results: filtered,
      };

      return result;
    } catch (error) {
      throw error;
    }
  }
}
