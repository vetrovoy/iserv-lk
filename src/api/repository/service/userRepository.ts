import { Config } from "../../config/config";
import { TUserLogOnRequest, TUserLogOnResponse } from "../../types";
import { endpoints } from "../../routes/routes";

export class UserRepository extends Config {
  public async logOn(data: TUserLogOnRequest): Promise<TUserLogOnResponse> {
    try {
      await this.throttle();

      const response = await this.request(endpoints.LogOnExt, data);

      const result: TUserLogOnResponse = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
