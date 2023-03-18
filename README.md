# The Lord of the Rings SDK

## Overview

This SDK is designed to provide easy access to information about The Lord of the Rings trilogy through [an existing API](https://the-one-api.dev/) . The SDK covers only the movie endpoints.

## Installation

The SDK can be installed using your preferred package manager. For example, if you're using npm:

```bash
npm install lord-of-the-rings-sdk
```

## Usage

To use the SDK, first import it into your code:

```javascript
const LordOfTheRingsSDK = require('lord-of-the-rings-sdk');
```

Then create a new instance of the SDK with your API key. Sign up [here](https://the-one-api.dev/) to obtain your API key:

```javascript
const apiKey = 'YOUR_API_KEY';
const lotr = new LordOfTheRingsSDK(apiKey);
```

You can then use the methods provided by the SDK to access information about the movies. For example:

```javascript
lotr.getMovies().then((movies) => {
  console.log(movies);
});
```

This will return an object containing the list of movies each containing information about a movie in The Lord of the Rings trilogy, and pagination metadata.

## Methods

The following methods are available in the SDK:

#### `getMovies(options?)`

Returns an object containing an array of objects, each containing information about a movie in The Lord of the Rings trilogy, as well as metadata about the API response. You can optionally pass in an object to specify query parameters for the API request.

Example:

```javascript
const sdk = new LordOfTheRingsSDK();
const movies = await sdk.getAllMovies();
console.log(movies); // { movies: [{...}, {...}, {...}], total: 8, limit: 10, page: 1, pages: 1 }
```

#### `getMovieById(id)`

Returns an object containing information about the movie with the specified ID. The object contains a single `movie` property, which is an object containing movie information.

Example:

```javascript
const sdk = new LordOfTheRingsSDK();
const movie = await sdk.getMovieById('tt0120737');
console.log(movie); // { movie: {...} }
```

#### `getMovieQuotes(id, options?)`

Returns an object containing an array of objects, each containing a quote from the movie with the specified ID, as well as metadata about the API response. You can optionally pass in an object to specify query parameters for the API request.

Example:

```javascript
const quotes = await sdk.getMovieQuotes('API_KEY');
console.log(quotes); // { quotes: [{...}, {...}, {...}], total: 8, limit: 10, page: 1, pages: 1 }
```

Here are some examples of how to use the optional query parameters:

- To limit the number of results returned:

```javascript
const options = { limit: 10 };
const movies = await sdk.getAllMovies(options);
```

- To paginate through results:

```javascript
const options = { limit: 10, page: 2 };
const movies = await sdk.getAllMovies(options);
```

- To specify an offset:

```javascript
const options = { limit: 10, offset: 20 };
const movies = await sdk.getAllMovies(options);
```

- To sort the results:

```javascript
const options = { sort: '-releaseDate' };
const movies = await sdk.getAllMovies(options);
```

- To apply filters:

```javascript
const options: GetOptions = {
  filters: { director: 'Peter Jackson', year: 2001 },
};
const movies = await sdk.getAllMovies(options);
```
