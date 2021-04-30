import request from './requestService.js';
import { getUserData } from './authServices.js';

const databaseUrl = 'https://movie-library-60007-default-rtdb.firebaseio.com';
const id = getUserData();
const api = {
    movies: `${databaseUrl}/movies/${id.userId}.json`,
}

console.log(id.userId);

export const addMovie = async(movieData) => {
    let res = await request(api.movies, 'POST', movieData);
    return res;
}
export const getAllMovies = async () => {
    let res = await request(api.movies, 'GET');

    return Object.keys(res).map(key => ({key, ...res[key]}));
}