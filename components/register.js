import { html, render } from 'https://unpkg.com/lit-html?module';

let register = () => html`
    <form action="" id="register-form">
        <div class="row">
            <div class="col-md-12">
                <h2 id="reg-title">Register New Account</h2>
                <div class="mb-3 reg-input">
                    <input type="text" class="form-control" placeholder="Email">
                    <span class="err-msg">Incorrect email!</span>
                </div>
                <div class="mb-3 reg-input">
                    <input type="text" class="form-control" placeholder="Password">
                    <span class="err-msg">Password must contains less 6 characters!</span>
                </div>
                <div class="mb-3 reg-input">
                    <input type="text" class="form-control" placeholder="Password">
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

    connectedCallback() {
        render(register(), this)
    }
}

export default Register;