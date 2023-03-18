export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface MoviesAPIResponse {
  docs: Movie[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
export interface MoviesSDKResponse {
  movies: Movie[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export interface QuotesAPIResponse {
    docs: Quote[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
  }
export interface QuotesSDKResponse {
  quotes: Quote[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}


export interface MovieSDKResponse {
  movie: Movie;
}
export interface GetOptions {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: string;
  filters?: object;
}
