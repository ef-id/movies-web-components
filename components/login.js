import {Router} from 'https://unpkg.com/@vaadin/router';

import { html, render } from 'https://unpkg.com/lit-html?module';
import { login } from '../services/authServices.js';

let loginTemplate = (ctx) => html`
    <form action="" id="login-form" @submit=${ctx.onSubmit}>
        <div class="row">
            <div class="col-md-12">
                <h2 id="login-title">Login</h2>
                <div class="mb-3 login-input">
                    <input type="text" class="form-control" name="email" placeholder="Email">
                </div>
                <div class="mb-3 login-input">
                    <input type="password" class="form-control" name="password" placeholder="Password">
                    <span class="err-msg" id="login-err">Email or Password are wronged</span>
                </div>
                <button class="btn btn-danger" id="login-btn">Login</button>
            </div>
        </div>
    </form>
`;

class Login extends HTMLElement {
    constructor() {
        super();
    }

    onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let loginErrMsg = document.getElementById('login-err');

        login(email, password)
            .then(res => {
                if(email && password !== ''){
                    Router.go('/');
                }else{
                    loginErrMsg.style.display = 'block';
                }    
            })
            .catch(err => {
                console.log(err);
                loginErrMsg.style.display = 'block';
            })
    }

    connectedCallback() {
        render(loginTemplate(this), this, { eventContext: this })
    }

}

export default Login;