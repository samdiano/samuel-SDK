import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor({
    apiKey,
    baseUrl = 'https://the-one-api.dev/v2/movie',
  }: Config) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  protected request<T>(
    endpoint: string,
    options?: AxiosRequ  estConfig
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
    const config: AxiosRequestConfig = {
      ...options,
      headers, 
    };

    return axios(url, config).then((response: AxiosResponse<T>) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      throw new Error(response.statusText);
    });
  }
}

export default Base;
