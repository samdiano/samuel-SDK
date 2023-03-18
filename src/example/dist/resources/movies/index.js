"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movies = void 0;
const base_1 = require("../base");
const resource = 'movie';
class Movies extends base_1.Base {
    async getAllMovies(options) {
        return this.request(resource, options);
    }
}
exports.Movies = Movies;
