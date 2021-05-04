import { html, render } from 'https://unpkg.com/lit-html?module';


const movieCardTemplate = (ctx) => html`
    <div>
        <img src="${ctx.data.imgUrl}" class="card-img-top" alt="${ctx.data.imgUrl}" id="card-img">
        <div class="card-body">
            <h5 class="card-title">${ctx.data.title}</h5>
            <a href="/more-details/${ctx.data.key}" class="btn btn-warning btn-sm">More Details</a>
        </div>
    </div>
`;

class MovieCard extends HTMLElement {

    connectedCallback() {
        render(movieCardTemplate(this), this, { eventContext: this })
    }
}

export default MovieCard;