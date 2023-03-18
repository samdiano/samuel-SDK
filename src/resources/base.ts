import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { GetOptions } from './movies/types';

type Config = {
  apiKey: string;
  baseUrl?: string;
};
export class Base {
  readonly apiKey: string;
  readonly baseUrl: string;

  constructor({ apiKey, baseUrl = 'https://the-one-api.dev/v2' }: Config) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  /*
   * Method for sending HTTP requests using the axios library
   */
  public request<T>(
    endpoint: string,
    params?: GetOptions,
    options?: AxiosRequestConfig
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;

    const { filters, ...otherOptions } = params ?? {};

    /*
     * Defining headers for the request that include the API key
     */
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    /*
     * Combining params and otherOptions into a single params object
     * and creating a config object for the axios request
     */
    const config: AxiosRequestConfig = {
      ...options,
      headers,
      params: {
        ...filters,
        ...otherOptions,
      },
    };

    /*
     * Sending the axios request and handling the response
     */
    return axios(url, config).then((response: AxiosResponse<T>) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      throw new Error(response.statusText);
    });
  }
}

export default Base;
