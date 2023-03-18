import { AxiosRequestConfig } from 'axios';
import { GetOptions } from './movies/types';
type Config = {
    apiKey: string;
    baseUrl?: string;
};
export declare abstract class Base {
    private readonly apiKey;
    private readonly baseUrl;
    constructor({ apiKey, baseUrl }: Config);
    protected request<T>(endpoint: string, params?: GetOptions, options?: AxiosRequestConfig): Promise<T>;
}
export default Base;
