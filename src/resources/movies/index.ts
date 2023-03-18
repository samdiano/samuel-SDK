import { Base } from '../base';
import {
  Movie,
  GetOptions,
  MoviesSDKResponse,
  MoviesAPIResponse,
  MovieSDKResponse,
  QuotesSDKResponse,
  QuotesAPIResponse,
} from './types';

const resource = 'movie';

export class Movies extends Base {
  /*
   * Fetch all movies
   */
  async getAllMovies(options?: GetOptions): Promise<MoviesSDKResponse> {
    const { docs, ...metadata } = await this.request<MoviesAPIResponse>(
      resource,
      options
    );
    return { movies: docs, ...metadata };
  }

  /*
   * Fetch a specific movie by its ID
   */
  async getMovieById(id: string): Promise<MovieSDKResponse> {
    const { docs, ...metadata } = await this.request<MoviesAPIResponse>(
      resource
    );
    return { movie: docs[0] };
  }

  /*
   * Fetch quotes for a specific movie by its ID
   */
  async getMovieQuotes(
    id: string,
    options?: GetOptions
  ): Promise<QuotesSDKResponse> {
    const { docs, ...metadata } = await this.request<QuotesAPIResponse>(
      `${resource}/${id}/quote`,
      options
    );
    return { quotes: docs, ...metadata };
  }
}
