import axios, { AxiosInstance, AxiosResponse } from "axios";

import { TEndpoint } from "../routes/apiRoutes";

type IConfig = {
  request: (endpoint: TEndpoint, data: object) => Promise<AxiosResponse>;
  throttle: () => void;
};

export class Config implements IConfig {
  private readonly API_ROOT =
    process.env.API_ROOT || "http://localhost:3001/Ext";
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
  }

  public async request<T>(
    endpoint: TEndpoint,
    data: object,
  ): Promise<AxiosResponse<T>> {
    try {
      const apiEndpoint = this.API_ROOT + "/" + endpoint;
      console.log(apiEndpoint);
      const response = await this.instance.post(apiEndpoint, data);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
        throw error;
      } else {
        console.error("An unexpected error occurred:", error);
        throw error;
      }
    }
  }

  public async throttle() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
