import axios, { AxiosInstance, AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";

import { routes, TRoute, TEndpoint } from "../routes/routes";

type IConfig = {
  request: (endpoint: TEndpoint, data: object) => Promise<AxiosResponse>;
  cleanup: () => void;
  throttle: () => void;
};

export class Config implements IConfig {
  private readonly API_ROOT = process.env.API_ROOT || "http://localhost:3000";
  private instance: AxiosInstance;
  private mock: MockAdapter;

  constructor() {
    this.instance = axios.create();
    this.mock = new MockAdapter(this.instance);

    this.init();
  }

  private init() {
    // Init mock endpoints
    routes.forEach((route: TRoute) => {
      const apiEndpoint = this.API_ROOT + route.matcher;
      this.mock.onPost(apiEndpoint).reply(route.status, route.data);
    });
  }

  public async request<T>(
    endpoint: TEndpoint,
    data: object,
  ): Promise<AxiosResponse<T>> {
    try {
      const apiEndpoint = this.API_ROOT + endpoint;
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

  public cleanup() {
    this.mock.restore();
  }
}
