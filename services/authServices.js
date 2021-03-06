const apiKey = `AIzaSyBBAFqg481eeBWSndzpWzJX1Rag_u9bF44`;
//const databaseUrl = `https://movie-library-60007-default-rtdb.firebaseio.com/`;

const api = {
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
}

import request from './requestService.js';
import {Router} from 'https://unpkg.com/@vaadin/router';

export const register = async (email, password) => {
    let res = await request(api.register, 'POST', {
        email,
        password,
    })

    localStorage.setItem('auth', JSON.stringify(res));
    
    return res;
}

export const login = async (email, password) => {
    let res = await request(api.login, 'POST', {
        email,
        password,
    });

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
}

export const getUserData = () => {
    try {
        let data = JSON.parse(localStorage.getItem('auth'));

        return {
            isAuthenticated: Boolean(data.idToken),
            email: data.email,
        }
    } catch(error) {
        return {
            isAuthenticated: false,
            email: '',
        }
    }
}

export const logout = () => {
    
    localStorage.setItem('auth', '');
    document.getElementById("login").style.display = 'block';
    document.getElementById("logout").style.display = 'none';
}