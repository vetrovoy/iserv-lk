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

      const filtered = response.data.results.filter(
        (item) =>
          item.Period >= parseInt(PeriodBegin) &&
          item.Period <= parseInt(PeriodEnd),
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
