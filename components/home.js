import {html, render} from 'https://unpkg.com/lit-html?module';
import { getUserData } from '../services/authServices.js';

let home = (ctx) => html`
    ${ctx.user.isAuthenticated 
        ? html`
            <div class="container">
                <movies-component></movies-component>
            </div>`
        : html`
            <span id="title">Welcome to Movie Land</span>
            <span> Create your movie library</span>
            <span>and manage your favorite movies</span>
            <a class="btn btn-danger btn-lg" id="sing-up-btn" href="/register">Sign Up</a>` 
    }
`;

class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.user = getUserData();
        render(home(this), this, { eventContext: this})

        if(this.user.isAuthenticated){
            document.getElementById("login").style.display = 'none';
            document.getElementById("logout").style.display = 'block';
        }else{
            document.getElementById("login").style.display = 'block';
            document.getElementById("logout").style.display = 'none';
        }
    }
}

export default Home;