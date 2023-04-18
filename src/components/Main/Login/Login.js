import { useState } from 'react';
import './Login.css'
import * as userService from '../../../services/userService.js';
import * as doctorService from '../../../services/doctorService.js';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext.js';

const Login = () => {

    const { user, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        role: 'user',
        email: '',
        password: '',
    });

    const onChangeDataHandler = (e) => {
        console.log(e.target.name);
        setData(state => ({ ...state, [e.target.name]: e.target.value }));
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (data.role === 'user') {
            try {
                const user = await userService.login(data.email, data.password);
                updateUser({ ...user, isLogged: true });

                if (user) {
                    navigate('/doctors');
                }
            } catch (error) {
                console.log('Error in login - user', error);
            }

        } else if (data.role === 'doctor') {
            try {
                const doctor = await doctorService.login(data.email, data.password);
                console.log('Doctor', doctor);

                if (doctor) {
                    navigate('/doctors');
                }
            } catch (error) {
                console.log('Error in login - doctor', error);
            }
        }
        // to fetch data;
    }
    return (
        <form className="form login__form" onSubmit={onSubmitHandler}>
            <h1 className="form__title">Login Form</h1>
            <div className="form__div">
                <label className="form__label" htmlFor="role">Role</label>
                <select className="form__input" name="role" id="role" value={data.role} onChange={e => onChangeDataHandler(e)}>
                    <option value="user">User</option>
                    <option value="doctor">Doctor</option>
                </select>
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="email">Email</label>
                <input className="form__input" type="email" name="email" id="email" onChange={onChangeDataHandler} />
            </div>
            <div className="form__div">
                <label className="form__label" htmlFor="password">Password</label>
                <input className="form__input" type="password" name="password" id="password" onChange={onChangeDataHandler} />
            </div>

            <button className="form__btn">Login</button>
        </form>
    )
}

export default Login;