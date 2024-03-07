import { Config } from "../../config/config";
import { TChargeRequest, TChargeResponse } from "../../types";

export class ChargesRepository extends Config {
  public async getCharges({
    ExtToken,
    PeriodBegin,
    PeriodEnd,
  }: TChargeRequest): Promise<TChargeResponse> {
    try {
      await this.throttle();

      const response = await this.request<TChargeResponse>("GetChargesExt", {
        ExtToken,
        PeriodBegin,
        PeriodEnd,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
