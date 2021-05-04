import { html, render } from 'https://unpkg.com/lit-html?module';
import {Router} from 'https://unpkg.com/@vaadin/router';
import { register } from '../services/authServices.js'

let registerTemplate = (ctx) => html`
    <form action="" id="register-form" @submit = ${ctx.onSubmit}>
        <div class="row">
            <div class="col-md-12">
                <h2 id="reg-title">Register New Account</h2>
                <div class="mb-3 reg-input">
                    <input type="text" class="form-control" placeholder="Email" id="email">
                    <span class="err-msg">Incorrect email!</span>
                    <span class="err-msg" id="email-exists-err">Already exists user with this email!</span>
                </div>
                <div class="mb-3 reg-input">
                    <input type="password" class="form-control" placeholder="Password" id="pass">
                    <span class="err-msg">Password must contains less 6 characters!</span>
                </div>
                <div class="mb-3 reg-input">
                    <input type="password" class="form-control" placeholder="Repeat password" id="rep-pass">
                    <span class="err-msg">Password not same!</span>
                </div>
                <button class="btn btn-danger" id="reg-btn">Register</button>
            </div>
        </div>
    </form>
`;

class Register extends HTMLElement {
    constructor() {
        super();
    }

    onSubmit(e) {
        e.preventDefault();

        let email = document.getElementById('email');
        let pass = document.getElementById('pass');
        let repPass = document.getElementById('rep-pass');
        let existEmailErr = document.getElementById('email-exists-err');

        let emailPattern = /^[\w.-]+[@]{1}[a-z]{2,}[.]{1}[a-z]{2,}$/mg;
        let emailMsg = email.nextElementSibling;
        let passMsg = pass.nextElementSibling;
        let repPassMsg = repPass.nextElementSibling;

        if(!email.value.match(emailPattern)){
            emailMsg.style.display='block';
            return;
        }else{
            emailMsg.style.display='none';
        }

        if(pass.value.length < 6){
            passMsg.style.display='block';
            return;
        }else{
            passMsg.style.display='none';
        }

        if(pass.value !== repPass.value){
            repPassMsg.style.display='block';
            return;
        }else{
            repPassMsg.style.display='none';
        }

        register(email.value, pass.value)
            .then(res => {
                res.error ? existEmailErr.style.display='block' : Router.go('/login');
            })
            
    }

    connectedCallback() {
        render(registerTemplate(this), this, { eventContext: this })
    }
}

export default Register;