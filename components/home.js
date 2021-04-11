import {html, render} from 'https://unpkg.com/lit-html?module';

let home = () => html`
    <span id="title">Welcome to Movie Land</span>
    <span> Create your movie library</span>
    <span>and manage your favorite movies</span>
    <a class="btn btn-danger btn-lg" id="sing-up-btn" href="/register">Sign Up</a>
`;

class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        render(home(), this)
    }
}

export default Home;