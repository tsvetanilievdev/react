import './Login.css'
const Login = () => {

    return (
        <form className="form login__form">
            <h1 className="form__title">Login Form</h1>
            <div className="form__div">
                <label className="form__label" for="email">Email</label>
                <input className="form__input" type="email" name="email" id="email" />
            </div>
            <div className="form__div">
                <label className="form__label" for="password">Password</label>
                <input className="form__input" type="password" name="password" id="password" />
            </div>

            <button className="form__btn">Login</button>
        </form>
    )
}

export default Login;