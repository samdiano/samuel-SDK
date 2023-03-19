import {
  MoviesAPIResponse,
  MovieSDKResponse,
  MoviesSDKResponse,
  QuotesAPIResponse,
  QuotesSDKResponse,
} from '../movies/types';

const moviesAPIResponse: MoviesAPIResponse = {
  docs: [
    {
      _id: '1',
      name: 'The Fellowship of the Ring',
      runtimeInMinutes: 178,
      budgetInMillions: 93,
      boxOfficeRevenueInMillions: 871.5,
      academyAwardNominations: 13,
      academyAwardWins: 4,
      rottenTomatoesScore: 91,
    },
  ],
  total: 2,
  limit: 10,
  offset: 0,
  page: 1,
  pages: 1,
};

const moviesSDKResponse: MoviesSDKResponse = {
  movies: [
    {
      _id: '1',
      name: 'The Fellowship of the Ring',
      runtimeInMinutes: 178,
      budgetInMillions: 93,
      boxOfficeRevenueInMillions: 871.5,
      academyAwardNominations: 13,
      academyAwardWins: 4,
      rottenTomatoesScore: 91,
    },
  ],
  total: 2,
  limit: 10,
  offset: 0,
  page: 1,
  pages: 1,
};

const movieSDKResponse: MovieSDKResponse = {
  movie: {
    _id: '1',
    name: 'The Fellowship of the Ring',
    runtimeInMinutes: 178,
    budgetInMillions: 93,
    boxOfficeRevenueInMillions: 871.5,
    academyAwardNominations: 13,
    academyAwardWins: 4,
    rottenTomatoesScore: 91,
  },
};

const quotesAPIResponse: QuotesAPIResponse = {
  docs: [
    {
      _id: '1',
      dialog: 'Who is she? This woman you sing of?',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc15',
      id: '1',
    },
    {
      _id: '2',
      dialog:
        "Tis the Lady of L'thien. The Elf Maiden who gave her love to Beren ... a mortal.",
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfbe6',
      id: '2',
    },
  ],
  total: 2,
  limit: 10,
  offset: 0,
  page: 1,
  pages: 1,
};

const quotesSDKResponse: QuotesSDKResponse = {
  quotes: [
    {
      _id: '1',
      dialog: 'Who is she? This woman you sing of?',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc15',
      id: '1',
    },
    {
      _id: '2',
      dialog:
        "Tis the Lady of L'thien. The Elf Maiden who gave her love to Beren ... a mortal.",
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfbe6',
      id: '2',
    },
  ],
  total: 2,
  limit: 10,
  offset: 0,
  page: 1,
  pages: 1,
};

const axiosMockSuccessResponse = {
  data: {
    docs: [
      {
        _id: '1',
        name: 'The Fellowship of the Ring',
        runtimeInMinutes: 178,
        budgetInMillions: 93,
        boxOfficeRevenueInMillions: 871.5,
        academyAwardNominations: 13,
        academyAwardWins: 4,
        rottenTomatoesScore: 91,
      },
    ],
    total: 1,
    limit: 1,
    offset: 0,
    page: 1,
    pages: 1,
  },
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {},
};

const axiosMockFailureResponse = {
  data: {},
  status: 400,
  statusText: 'Bad Request',
  headers: {},
  config: {},
};

export {
  moviesAPIResponse,
  moviesSDKResponse,
  movieSDKResponse,
  axiosMockSuccessResponse,
  axiosMockFailureResponse,
  quotesAPIResponse,
  quotesSDKResponse,
};
