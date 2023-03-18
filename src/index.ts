import { Movies } from './resources/movies';

class LOTR {
  movies: Movies;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.movies = new Movies(config);
  }
}

export default LOTR;