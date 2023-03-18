interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

interface MovieResponse {
  movies: Movie[];
  total: number;
}

interface GetMoviesOptions {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: string;
  filter?: string;
}
