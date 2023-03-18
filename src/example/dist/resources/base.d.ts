import { AxiosRequestConfig } from 'axios';
import { GetMoviesOptions } from './movies/types';
type Config = {
    apiKey: string;
    baseUrl?: string;
};
export declare abstract class Base {
    private readonly apiKey;
    private readonly baseUrl;
    constructor({ apiKey, baseUrl }: Config);
    protected request<T>(endpoint: string, params?: GetMoviesOptions, options?: AxiosRequestConfig): Promise<T>;
}
export default Base;
