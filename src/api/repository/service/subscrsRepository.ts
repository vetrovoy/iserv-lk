import { Config } from "../../config/config";
import { TSubscrRequest, TSubscrResponse } from "../../types";

export class SubscrsRepository extends Config {
  public async getSubscrs(data: TSubscrRequest): Promise<TSubscrResponse> {
    try {
      await this.throttle();

      const response = await this.request<TSubscrResponse>(
        "GetSubscrsExt",
        data,
      );

      const result = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
