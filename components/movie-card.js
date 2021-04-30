import { html, render } from 'https://unpkg.com/lit-html?module';


const movieCardTemplate = (ctx) => html`
    <div>
        <img src="${ctx.data.imgUrl}" class="card-img-top" alt="${ctx.data.imageUrl}">
        <div class="card-body">
            <h5 class="card-title">${ctx.data.title}</h5>
            <a href="#" class="btn btn-warning btn-sm">More Details</a>
        </div>
    </div>
`;

class MovieCard extends HTMLElement {
    connectedCallback() {
        console.log(this.data.title);
        render(movieCardTemplate(this), this, { eventContext: this })
    }
}

export default MovieCard;