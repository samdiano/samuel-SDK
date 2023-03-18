"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const client = new index_1.LOTR({
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
