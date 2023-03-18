"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOTR = void 0;
const movies_1 = require("./resources/movies");
class LOTR {
    constructor(config) {
        this.movies = new movies_1.Movies(config);
    }
}
exports.LOTR = LOTR;
