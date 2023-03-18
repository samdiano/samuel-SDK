import { LOTR } from '../../index';

const client = new LOTR({
  apiKey: 'HRgveGa6MxM14M5QYZeS',
});

client.movies
  .getAllMovies({
    limit: 3,
    page: 1,
    sort: 'name:asc'
  })
  .then((data) => {
    console.log(data);
  });
