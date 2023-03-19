import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Base from '../base';
import Movies from '../movies';
import { GetOptions } from '../movies/types';
import {
  moviesAPIResponse,
  movieSDKResponse,
  moviesSDKResponse,
  quotesAPIResponse,
  quotesSDKResponse,
} from './mocks';

jest.mock('../base');
jest.mock('axios');

const mockedBase = Base as jest.MockedClass<typeof Base>;

const apiKey = 'test_api_key';
const baseUrl = 'https://example.com/api/v1';
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('Movies', () => {
  let movies: Movies;
  let mockBaseRequest: jest.Mock;

  beforeEach(() => {
    movies = new Movies({ apiKey, baseUrl });

    mockBaseRequest = jest.fn();
    mockedBase.prototype.request.mockImplementationOnce(mockBaseRequest);
  });

  describe('getMovies', () => {
    it('should call getMovies with the correct parameters', async () => {
      const options: GetOptions = {
        limit: 10,
        page: 1,
        offset: 0,
      };

      mockBaseRequest.mockClear();
      mockBaseRequest.mockResolvedValueOnce(moviesAPIResponse);

      const result = await movies.getMovies(options);

      expect(mockBaseRequest).toHaveBeenCalledWith('movie', options);
      expect(result).toEqual(moviesSDKResponse);
    });
  });

  describe('getMovieById', () => {
    it('should call getMovieById with the correct parameters', async () => {
      const movieId = '1';

      mockBaseRequest.mockResolvedValueOnce(moviesAPIResponse);

      const result = await movies.getMovieById(movieId);

      expect(mockBaseRequest).toHaveBeenCalledWith(`movie/${movieId}`);
      expect(result).toEqual(movieSDKResponse);
    });
  });

  describe('getMovieQuotes', () => {
    it('should call the request method with the correct parameters', async () => {
      const movieId = '1';
      const options: GetOptions = {
        limit: 10,
        page: 1,
        offset: 0,
      };

      mockBaseRequest.mockResolvedValueOnce(quotesAPIResponse);

      const result = await movies.getMovieQuotes(movieId, options);
      expect(mockBaseRequest).toHaveBeenCalledWith(
        `movie/${movieId}/quote`,
        options
      );

      expect(result).toEqual(quotesSDKResponse);
    });
  });
});
