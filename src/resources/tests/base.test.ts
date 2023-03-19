import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Base from '../base';
import { GetOptions } from '../movies/types';
import { axiosMockFailureResponse, axiosMockSuccessResponse } from './mocks';

jest.mock('axios');
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

const apiKey = 'test_api_key';
const baseUrl = 'https://example.com/api/v1';

class MockBase extends Base {
  public request<T>(
    endpoint: string,
    params?: GetOptions,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return super.request<T>(endpoint, params, options);
  }
}



describe('Base', () => {
  let base: MockBase;

  const axiosSuccessResponse = {
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
  }


  beforeEach(() => {
    base = new MockBase({ apiKey, baseUrl });
  });

  it('should create a new instance of Base', () => {
    expect(base).toBeDefined();
  });

  it('should have a request method', () => {
    expect(base.request).toBeDefined();
  });

  it('should make an API request', async () => {
    const endpoint = 'test_endpoint';
    const data = { foo: 'bar' };
    const expectedUrl = `${baseUrl}/${endpoint}`;
    const expectedParams = {
      limit: 10,
      page: 1,
      offset: 0,
    };
    const expectedHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };
    const expectedConfig: AxiosRequestConfig = {
      headers: expectedHeaders,
      params: expectedParams,
    };

    mockedAxios.mockResolvedValueOnce(axiosMockSuccessResponse);

    const result = await base.request(endpoint, expectedParams);

    expect(result).toEqual(axiosSuccessResponse.data);
  });

  it('should throw an error for a bad request', async () => {
    const endpoint = 'test_endpoint';
    const error = new Error('Bad Request');
    mockedAxios.mockResolvedValueOnce(axiosMockFailureResponse);

    await expect(base.request(endpoint)).rejects.toThrow(error);
  });
});
