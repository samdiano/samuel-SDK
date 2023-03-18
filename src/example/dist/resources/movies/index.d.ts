import { Base } from '../base';
import { GetMoviesOptions, MoviesResponse } from './types';
export declare class Movies extends Base {
    getAllMovies(options?: GetMoviesOptions): Promise<MoviesResponse>;
}
