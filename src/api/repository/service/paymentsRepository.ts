import { Config } from "../../config/config";
import { TPaymentRequest, TPaymentResponse } from "../../types";
import { endpoints } from "../../routes/routes";

export class PaymentsRepository extends Config {
  public async getPayments(data: TPaymentRequest): Promise<TPaymentResponse> {
    try {
      await this.throttle();

      const response = await this.request(endpoints.paymentsRepository, data);

      const result: TPaymentResponse = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
