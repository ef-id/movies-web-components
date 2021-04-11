import { html, render } from 'https://unpkg.com/lit-html?module';

let login = () => html`
    <form action="" id="login-form">
        <div class="row">
            <div class="col-md-12">
                <h2 id="login-title">Login</h2>
                <div class="mb-3 login-input">
                    <input type="text" class="form-control" placeholder="Email">
                    <span class="err-msg">Incorrect email!</span>
                </div>
                <div class="mb-3 login-input">
                    <input type="text" class="form-control" placeholder="Password">
                    <span class="err-msg">Password must contains less 6 characters!</span>
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

    connectedCallback() {
        render(login(), this)
    }

}

export default Login;