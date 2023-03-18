# The Lord of the Rings SDK Design

## Overview
The Lord of the Rings SDK is a software development kit designed to provide easy access to information about the Lord of the Rings movie trilogy. The SDK is built in Typescript and makes use of the existing Lord of the Rings API from [The One API](https://the-one-api.dev/) to retrieve information about movies, movie quotes, and more.

The code is organized into several modules, each of which handles a specific aspect of interacting with the Lord of the Rings API.

The design includes a Movies class that extends a Base class, indicating that it inherits its properties and methods. The Movies class includes three async methods:

- getAllMovies(options?: GetOptions): Promise<MoviesSDKResponse>: Fetches all movies and returns a Promise that resolves to an object containing an array of movie data and metadata.

- getMovieById(id: string): Promise<MovieSDKResponse>: Fetches a specific movie by its ID and returns a Promise that resolves to an object containing the movie data.

- getMovieQuotes(id: string, options?: GetOptions): Promise<QuotesSDKResponse>: Fetches quotes for a specific movie by its ID and returns a Promise that resolves to an object containing an array of quote data and metadata.

The request method is utilized in all three methods to make HTTP requests to the API. It takes a resource and options as arguments and returns a Promise that resolves to an API response.
