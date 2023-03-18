import { Base } from '../base';
import { Movie } from './types';

const resource = 'movie';

export class Movies extends Base {
  async getAllMovies(options?: GetMoviesOptions): Promise<Movie[]> {
    return this.request(resource, options);
  }
}
