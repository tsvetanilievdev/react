import { useState } from 'react';
import './Login.css'
const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const onChangeDataHandler = (e) => {
        console.log(e.target.name);
        setData(state => ({ ...state, [e.target.name]: e.target.value }));
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const userData = {
            email: data.email,
            password: data.password,
        }
        console.log(userData);
        // to fetch data;
    }
    return (
        <form className="form login__form" onSubmit={onSubmitHandler}>
            <h1 className="form__title">Login Form</h1>
            <div className="form__div">
                <label className="form__label" htmlFor="email">Email</label>
                <input className="form__input" type="email" name="email" id="email" onBlur={onChangeDataHandler} />
            </div>
            <div className="form__div">
                <label className="form__label" htmlFor="password">Password</label>
                <input className="form__input" type="password" name="password" id="password" onBlur={onChangeDataHandler} />
            </div>

            <button className="form__btn">Login</button>
        </form>
    )
}

export default Login;