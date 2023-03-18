import { Movies } from './resources/movies';

export class LOTR {
  movies: Movies;

  constructor(config: { Authentication: string; baseUrl?: string }) {
    this.movies = new Movies(config);
  }
}
