import { Config } from "../../config/config";
import { TChargeRequest, TChargeResponse } from "../../types";

export class ChargesRepository extends Config {
  public async getCharges(data: TChargeRequest): Promise<TChargeResponse> {
    try {
      await this.throttle();

      const response = await this.request<TChargeResponse>(
        "GetChargesExt",
        data,
      );

      const result = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
