"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const client = new index_1.LOTR({
    apiKey: 'HRgveGa6MxM14M5QYZeS',
});
client.movies
    .getMovieQuotes('5cd95395de30eff6ebccde5c', { limit: 10 })
    .then((data) => {
    console.log(data);
});
