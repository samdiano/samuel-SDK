import { Movies } from './resources/movies';
declare class LOTR {
    movies: Movies;
    constructor(config: {
        apiKey: string;
        baseUrl?: string;
    });
}
export default LOTR;
