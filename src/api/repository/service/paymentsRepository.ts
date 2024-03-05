import { Config } from "../../config/config";
import { TPaymentRequest, TPaymentResponse } from "../../types";

export class PaymentsRepository extends Config {
  public async getPayments({
    ExtToken,
    subscrId,
    PeriodBegin,
    PeriodEnd,
  }: TPaymentRequest): Promise<TPaymentResponse> {
    try {
      await this.throttle();

      const response = await this.request<TPaymentResponse>("GetPaymentsExt", {
        ExtToken,
        subscrId,
        PeriodBegin,
        PeriodEnd,
      });

      const filtered = response.data.result.filter(
        (item) =>
          parseInt(item.Date) >= PeriodBegin &&
          parseInt(item.Date) <= PeriodEnd,
      );

      const result = {
        success: response.data.success,
        result: filtered,
      };

      return result;
    } catch (error) {
      throw error;
    }
  }
}
