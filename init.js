import { Router } from 'https://unpkg.com/@vaadin/router';

import Home from './components/home.js';
import Login from './components/login.js';
import Movies from './components/movies.js';
import MovieCard from './components/movie-card.js';
import Register from './components/register.js';
import AddMovie from './components/add.js';
import { logout } from './services/authServices.js';
import MoreDetails from './components/more-details.js';
import EditMovie from './components/edit.js';

customElements.define('home-component', Home);
customElements.define('login-component', Login);
customElements.define('register-component', Register);
customElements.define('movies-component', Movies);
customElements.define('movie-card', MovieCard);
customElements.define('add-movie', AddMovie);
customElements.define('more-details', MoreDetails);
customElements.define('edit-movie', EditMovie);

const main = document.getElementById('main');
const router = new Router(main);

router.setRoutes([
    {
        path: '/',
        component: 'home-component',
    },
    {
        path: '/login',
        component: 'login-component',
    },
    {
        path: '/register',
        component: 'register-component',
    },
    {
        path: '/logout',
        action: (context, commands) => {
            logout();
            return commands.redirect('/login'); 
        },
    },
    {
        path: '/add-movie',
        component: 'add-movie',
    },
    {
        path:'/more-details/:id',
        component: 'more-details'
    },
    {
        path:'/edit/:id',
        component: 'edit-movie',
    }
])
