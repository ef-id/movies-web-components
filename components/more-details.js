import { html, render } from 'https://unpkg.com/lit-html?module';
import { Router } from 'https://unpkg.com/@vaadin/router';

import { getOneMovie } from '../services/moiveServices.js';
import { getUserData } from '../services/authServices.js';
import { deleteMovie } from '../services/moiveServices.js';


const moreDetailsTemplate = (ctx) => html`
    <section class="row" id="movie-details">
        <article class="col-3">
            <img src="${ctx.imgUrl}" alt="${ctx.imgUrl}" id="img-details">
        </article>
        <article class="col-6" id="article">
            <h3>Movie title: ${ctx.title}</h3>
            <h3>Movie Description:</h3>
            <p>${ctx.desc}</p>
            <button class="btn btn-warning" id="edit-btn" @click=${ctx.updateMovie}>Edit</button>
            <button class="btn btn-danger" id="delete-btn" @click=${ctx.deleteMovie}>Delete</button>
            <button class="btn btn-danger" id="back-btn" @click=${ctx.backHome}>Back to My Movies</button>
        </article>
    
    </section>
`;


class MoreDetails extends HTMLElement {
    constructor() {
        super();

        this.user = getUserData();
    }

    updateMovie() {
        Router.go(`/edit/${this.location.params.id}`)
    }

    deleteMovie() {
        deleteMovie(this.location.params.id)
            .then(res => {
                Router.go('/');
            })
    }

    backHome() {
        Router.go('/');
    }

    connectedCallback() {
        getOneMovie(this.location.params.id)
            .then(data => {
                Object.assign(this, data);
                render(moreDetailsTemplate(this), this, { eventContext: this })
            })

    }
}

export default MoreDetails;