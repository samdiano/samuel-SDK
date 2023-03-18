import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { GetMoviesOptions } from './movies/types';

type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor({ apiKey, baseUrl = 'https://the-one-api.dev/v2' }: Config) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  protected request<T>(
    endpoint: string,
    params?: GetMoviesOptions,
    options?: AxiosRequestConfig
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const { filters, ...otherOptions } = params ?? {};

    // const queryParams = { ...filters, ...otherOptions }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    const config: AxiosRequestConfig = {
      ...options,
      headers,
      params: {
        ...filters,
        ...otherOptions,
      },
    };

    return axios(url, config).then((response: AxiosResponse<T>) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response.request.path);
        return response.data;
      }
      throw new Error(response.statusText);
    });
  }
}

export default Base;
