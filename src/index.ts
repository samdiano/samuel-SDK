import { Movies } from './resources/movies';

export class LOTR {
  movies: Movies;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.movies = new Movies(config);
  }
}
