import { Movies } from './resources/movies';
export declare class LOTR {
    movies: Movies;
    constructor(config: {
        apiKey: string;
        baseUrl?: string;
    });
}
