const apiKey = `AIzaSyBBAFqg481eeBWSndzpWzJX1Rag_u9bF44`;
//const databaseUrl = `https://movie-library-60007-default-rtdb.firebaseio.com/`;

const api = {
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
}


import request from './requestService.js';

export const register = async (email, password) => {
    let res = await request(api.register, 'POST', {
        email,
        password,
    })

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
}