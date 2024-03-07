import { Config } from "../../config/config";
import { TUserLogOnRequest, TUserLogOnResponse } from "../../types";

export class UserRepository extends Config {
  public async logOn({
    Username,
    Password,
  }: TUserLogOnRequest): Promise<TUserLogOnResponse> {
    try {
      await this.throttle();

      const response = await this.request<TUserLogOnResponse>("LogOnExt", {
        Username,
        Password,
      });

      const result = response.data;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
