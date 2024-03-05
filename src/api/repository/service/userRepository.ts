import { Config } from "../../config/config";
import { TUserLogOnRequest, TUserLogOnResponse } from "../../types";

export class UserRepository extends Config {
  public async logOn(data: TUserLogOnRequest): Promise<TUserLogOnResponse> {
    try {
      await this.throttle();

      const response = await this.request<TUserLogOnResponse>("LogOnExt", data);

      const result = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
