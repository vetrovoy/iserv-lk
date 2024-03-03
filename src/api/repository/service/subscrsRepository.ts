import { Config } from "../../config/config";
import { TSubscrRequest, TSubscrResponse } from "../../types";
import { endpoints } from "../../routes/routes";

export class SubscrsRepository extends Config {
  public async getSubscrs(data: TSubscrRequest): Promise<TSubscrResponse> {
    try {
      await this.throttle();

      const response = await this.request(endpoints.subscrsRepository, data);

      const result: TSubscrResponse = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
