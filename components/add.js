import { Router } from 'https://unpkg.com/@vaadin/router';
import { html, render } from 'https://unpkg.com/lit-html?module';
import { addMovie } from '../services/moiveServices.js';
import { getUserData } from '../services/authServices.js';

const addMovieTemplate = (ctx) => html`
    <form action="" id="add-movie-form" @submit=${ctx.onSubmit}>
        <div class="row">
            <div class="col-md-12">
                <h2 id="add-movie-title">Add Movie</h2>
                <div class="mb-3 add-input">
                    <input type="text" class="form-control" placeholder="Movie title" id="movie-title">
                    <span class="err-msg">Title must contains less 2 characters!</span>
                </div>
                <div class="mb-3 add-input">
                    <input type="text" class="form-control" placeholder="Description" id="desc">
                    <span class="err-msg">Description must contains less 3 characters!</span>
                </div>
                <div class="mb-3 add-input">
                    <input type="text" class="form-control" placeholder="Image Url" id="imgUrl">
                    <span class="err-msg">Missing image Url</span>
                </div>
                <button class="btn btn-warning add-form-btns" @click="${ctx.back}">Back</button>
                <button class="btn btn-danger add-form-btns" id="add-btn">Add Movie</button>
            </div>
        </div>
    </form>
`;


class AddMovie extends HTMLElement {

    back(){
        Router.go('/');
    }
    onSubmit(e) {
        e.preventDefault();

        let title = document.getElementById('movie-title');
        let desc = document.getElementById('desc');
        let imgUrl = document.getElementById('imgUrl');

        let titleMsg = title.nextElementSibling;
        let descMsg = desc.nextElementSibling;
        let imgMsg = imgUrl.nextElementSibling;


        if (title.value.length < 2) {
            titleMsg.style.display = 'block';
            return;
        } else {
            titleMsg.style.display = 'none';
        }

        if (desc.value.length < 3) {
            descMsg.style.display = 'block';
            return;
        } else {
            descMsg.style.display = 'none';
        }

        if (imgUrl.value.length == '') {
            imgMsg.style.display = 'block';
            return;
        } else {
            imgMsg.style.display = 'none';
        }

        let { email } = getUserData();

        addMovie({
            creator: email,
            title: title.value,
            desc: desc.value,
            imgUrl: imgUrl.value,
        }).then(res => {
                alert('The movie has been successfully added!');
                Router.go('/');
            })

    }

    connectedCallback() {
        render(addMovieTemplate(this), this, { eventContext: this })
    }
}

export default AddMovie;