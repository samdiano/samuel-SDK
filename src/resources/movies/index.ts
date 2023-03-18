import { Base } from '../base';
import { Movie, GetMoviesOptions, MoviesResponse } from './types';

const resource = 'movie';

export class Movies extends Base {
  async getAllMovies(options?: GetMoviesOptions): Promise<MoviesResponse> {
    return this.request(resource, options);
  }
}
