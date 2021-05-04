import {Router} from 'https://unpkg.com/@vaadin/router';
import {html, render} from 'https://unpkg.com/lit-html?module';
import { editMovie } from '../services/moiveServices.js';
import { getOneMovie } from '../services/moiveServices.js';

const editTemplate = (ctx) => html`
    <form action="" id="edit-movie-form" @submit=${ctx.onSubmit}>
        <div class="row">
            <div class="col-md-12">
                <h2 id="edit-movie-title">Edit Movie</h2>
                <div class="mb-3 edit-input">
                    <input type="text" class="form-control" placeholder="Movie title" id="movie-title" value="${ctx.title}">
                    <span class="err-msg">Title must contains less 2 characters!</span>
                </div>
                <div class="mb-3 edit-input">
                    <input type="text" class="form-control" placeholder="Description" id="desc" value="${ctx.desc}">
                    <span class="err-msg">Description must contains less 3 characters!</span>
                </div>
                <div class="mb-3 edit-input">
                    <input type="text" class="form-control" placeholder="Image Url" id="imgUrl" value="${ctx.imgUrl}">
                    <span class="err-msg">Missing image Url</span>
                </div>
                <button class="btn btn-warning edit-form-btns" @click="${ctx.back}">Back</button>
                <button class="btn btn-danger edit-form-btns" id="edit-movie-btn">Edit Movie</button>
            </div>
        </div>
    </form>
`;


class EditMovie extends HTMLElement{
    constructor(){
        super();
    }

    back(){
        Router.go(`/more-details/${this.location.params.id}`)
    }
    onSubmit(e){
        e.preventDefault();

        let title = document.getElementById('movie-title');
        let desc = document.getElementById('desc');
        let imgUrl = document.getElementById('imgUrl');

        let titleMsg = title.nextElementSibling;
        let descMsg = desc.nextElementSibling;
        let imgMsg = imgUrl.nextElementSibling;

        if(title.value.length < 2){
            titleMsg.style.display='block';
            return;
        }else{
            titleMsg.style.display='none';
        }

        if(desc.value.length < 3){
            descMsg.style.display='block';
            return;
        }else{
            descMsg.style.display='none';
        }

        if(imgUrl.value.length == ''){
            imgMsg.style.display='block';
            return;
        }else{
            imgMsg.style.display='none';
        }

        editMovie(this.location.params.id, {
            title: title.value,
            desc: desc.value,
            imgUrl: imgUrl.value,
        })
            .then(res => {
                console.log(res);
                alert('You edited succesfully movie');
                Router.go(`/more-details/${this.location.params.id}`);
            })

        console.log(this.location.params.id);
    }

    connectedCallback(){
       getOneMovie(this.location.params.id)
            .then(data => {
                Object.assign(this, data);
                render(editTemplate(this), this, { eventContext: this })
        })
    }
}

export default EditMovie;