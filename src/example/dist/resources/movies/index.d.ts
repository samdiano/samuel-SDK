import { Base } from '../base';
import { GetOptions, MoviesSDKResponse, MovieSDKResponse, QuotesSDKResponse } from './types';
export declare class Movies extends Base {
    getAllMovies(options?: GetOptions): Promise<MoviesSDKResponse>;
    getMovieById(id: string): Promise<MovieSDKResponse>;
    getMovieQuotes(id: string, options?: GetOptions): Promise<QuotesSDKResponse>;
}
