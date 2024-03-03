import axios, { AxiosInstance, AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";

import { routes, Route, TEndpoint } from "../routes/routes";

type IConfig = {
  request: (endpoint: TEndpoint, data: object) => Promise<AxiosResponse>;
  cleanup: () => void;
  throttle: () => void;
};

export class Config implements IConfig {
  private instance: AxiosInstance;
  private mock: MockAdapter;

  constructor() {
    this.instance = axios.create();
    this.mock = new MockAdapter(this.instance);

    this.init();
  }

  private init() {
    // Init mock endpoints
    routes.forEach((route: Route) => {
      const endpoint = route.matcher;
      this.mock.onPost(endpoint).reply(route.status, route.data);
    });
  }

  public async request(
    endpoint: TEndpoint,
    data: object,
  ): Promise<AxiosResponse> {
    try {
      const response = await this.instance.post(endpoint, data);
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
