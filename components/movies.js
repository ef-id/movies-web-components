import { html, render } from 'https://unpkg.com/lit-html?module';
import { getAllMovies } from '../services/moiveServices.js';

const moviesTemplate = (ctx) => html`
        <h1 id="movies-page-title">My Movie Library</h1>
        <a class="btn btn-warning" href="/add-movie">Add movie</a>
        <div class="row card-design">
            ${ctx.movies?.map(movie => html`<movie-card .data=${movie} class="col-4 card"></movie-card>`)}
        </div>
`;

class Movies extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        getAllMovies()
            .then(movies => {
                this.movies = movies;
                this.render();
            })
        
            this.render();
    }

    render(){
        render(moviesTemplate(this), this, { eventContext: this })
    }
}

export default Movies;