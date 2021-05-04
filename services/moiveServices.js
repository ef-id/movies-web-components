import request from './requestService.js';
import { getUserData } from './authServices.js'

const databaseUrl = 'https://movie-library-60007-default-rtdb.firebaseio.com';

const api = {
    movies: `${databaseUrl}/movies.json`,
}


export const addMovie = async(movieData) => {
    let res = await request(api.movies, 'POST', movieData);
    return res;
}
export const getAllMovies = async () => {
    let res = await request(api.movies, 'GET');

    let { email } = getUserData();

    return Object.keys(res).map(key => ({key, ...res[key]})).filter(x => x.creator == email);
}

export const getOneMovie = async (id) =>{
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'GET');

    return Object(res, {id});
}

export const deleteMovie = async (id) => {
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'DELETE');
    
    return res;
}

export const editMovie = async (id, movieData) => {
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'PATCH', movieData);
    
    return res;
}

