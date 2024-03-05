import { Config } from "../../config/config";
import { TUserLogOnRequest, TUserLogOnResponse } from "../../types";

export class UserRepository extends Config {
  public async logOn(data: TUserLogOnRequest): Promise<TUserLogOnResponse> {
    try {
      await this.throttle();

      const response = await this.request("LogOnExt", data);

      const result: TUserLogOnResponse = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
