import LordOfTheRingsSDK from '../../index';

const client = new LordOfTheRingsSDK({
  apiKey: 'HRgveGa6MxM14M5QYZeS',
});

// client.movies
//   .getAllMovies({
//     limit: 3,
//     page: 1,
//     sort: 'name:asc'
//   })
//   .then((data) => {
//     console.log(data);
//   });

// client.movies
//   .getMovieById('5cd95395de30eff6ebccde5c')
//   .then((data) => {
//     console.log(data);
//   });

client.movies
  .getMovieQuotes('5cd95395de30eff6ebccde5c', { limit: 10 })
  .then((data) => {
    console.log(data);
  });
