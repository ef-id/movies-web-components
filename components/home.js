import {html, render} from 'https://unpkg.com/lit-html?module';
import { getUserData } from '../services/authServices.js';

let home = (ctx) => html`
    ${ctx.user.isAuthenticated 
        ? html`
            <div class="container">
                <movies-component></movies-component>
            </div>`
        : html`
            <span id="title">Welcome to MoviX</span>
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
        render(home(this), this, { eventContext: this});
        
        let loginElement = this.user.isAuthenticated ? 'none' : 'block';
        let logoutElement = this.user.isAuthenticated ? 'block' : 'none';

        document.getElementById("login").style.display = loginElement;
        document.getElementById("logout").style.display = logoutElement;

    }
}

export default Home;