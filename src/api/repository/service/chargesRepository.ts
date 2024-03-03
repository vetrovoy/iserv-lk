import { Config } from "../../config/config";
import { TChargeRequest, TChargeResponse } from "../../types";
import { endpoints } from "../../routes/routes";

export class ChargesRepository extends Config {
  public async getCharges(data: TChargeRequest): Promise<TChargeResponse> {
    try {
      await this.throttle();

      const response = await this.request(endpoints.chargesRepository, data);

      const result: TChargeResponse = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
