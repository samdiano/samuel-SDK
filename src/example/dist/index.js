"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movies_1 = require("./resources/movies");
class LOTR {
    constructor(config) {
        this.movies = new movies_1.Movies(config);
    }
}
exports.default = LOTR;
