import LOTR from '../../index';
import Movies from '../movies';

jest.mock('../movies');

const mockedMovies = Movies as jest.MockedClass<typeof Movies>;

const apiKey = 'test_api_key';
const baseUrl = 'https://example.com/api/v1';

describe('LOTR', () => {
  let lotr: LOTR;

  beforeEach(() => {
    lotr = new LOTR({ apiKey, baseUrl });
  });

  describe('constructor', () => {
    it('should create an instance of Movies with the correct configuration', () => {
      expect(mockedMovies).toHaveBeenCalledWith({ apiKey, baseUrl });
      expect(lotr.movies).toBeInstanceOf(Movies);
    });
  });
});
