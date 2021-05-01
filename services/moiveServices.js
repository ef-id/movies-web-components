import request from './requestService.js';

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

    return Object.keys(res).map(key => ({key, ...res[key]}));
}

export const getOneMovie = async (id) =>{
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'GET');

    return Object(res, {id});
}

export const deleteMovie = async (id) => {
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'DELETE');
    
    return res;
}