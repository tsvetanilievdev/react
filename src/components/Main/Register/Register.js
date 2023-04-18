import { useContext, useState } from 'react';
import './Register.css'
import * as userService from '../../../services/userService.js';
import * as doctorService from '../../../services/doctorService.js';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext.js';


const Register = () => {
    const { user, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isDoctorSelected, setIsDoctorSelected] = useState(false);
    const [data, setData] = useState({
        role: 'user',
        email: '',
        password: '',
        password2: '',
        firstName: '',
        lastName: '',
        age: '',
        phone: '',
        city: '',
        imgUrl: '',
        gender: '',
        specialty: '',
        experience: '',
        education: '',
        workplace: '',
        workdays: '',
        workhours: '',
        introDescription: '',
        description: '',
    });

    const onChangeDataHandler = (e) => {
        if (e.target.name === 'role') {
            if (e.target.value === 'doctor') {
                console.log('Doctor selected')
                setIsDoctorSelected(true);
            } else {
                setIsDoctorSelected(false);
            }
        }
        setData(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log('ROLEEEEEEEEEEEEEEEEEEEEE', data.role);
        if (data.role === 'user') {
            const userData = {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                gender: data.gender,
                phone: data.phone,
                city: data.city,
                imgUrl: data.imgUrl,
            }
            try {
                const user = await userService.register(userData);
                updateUser({ ...user, isLogged: true });

                if (user) {
                    navigate('/doctors');
                }
            } catch (error) {
                console.log('Error in register - user', error);
            }

        } else if (data.role === 'doctor') {
            const doctorData = {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                gender: data.gender,
                phone: data.phone,
                city: data.city,
                imgUrl: data.imgUrl,
                specialty: data.specialty,
                experience: data.experience,
                education: data.education,
                workplace: data.workplace,
                workdays: data.workdays,
                workhours: data.workhours,
                introDescription: data.introDescription,
                description: data.description,
            }

            console.log('DOCTOR DATA', doctorData, 'END DOCTOR DATA');
            try {
                const doctor = await doctorService.register(doctorData);
                updateUser({ user: { ...doctor }, isLogged: true, isDoctor: true });

                if (doctor) {
                    navigate('/profile-doctor');
                }
            } catch (error) {
                console.log('Error in register - doctor', error);
            }
        }
    }

    return (
        <form className="form register__form" onSubmit={onSubmitForm}>
            <h1 className="form__title">Register Form</h1>

            <div className="form__div">
                <label className="form__label" htmlFor="role">Role</label>
                <select className="form__input" name="role" id="role" value={data.role} onChange={(e) => {
                    if (e.target.value === 'doctor') {
                        setIsDoctorSelected(true);
                    } else {
                        setIsDoctorSelected(false);
                    }
                    onChangeDataHandler(e);
                }}>
                    <option value="user">User</option>
                    <option value="doctor">Doctor</option>
                </select>
            </div>

            <div className="form__div" >
                <label className="form__label" htmlFor="email">Email</label>
                <input className="form__input" type="email" name="email" id="email" onChange={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="password">Password</label>
                <input className="form__input" type="password" name="password" id="password" onChange={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="password2">Confirm Password</label>
                <input className="form__input" type="password" name="password2" id="password2" onChange={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="firstName">First name</label>
                <input className="form__input" type="text" name="firstName" id="firstName" onChange={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="lastName">Last name</label>
                <input className="form__input" type="text" name="lastName" id="lastName" onChange={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="age">Age</label>
                <input className="form__input" type="number" name="age" id="age" onChange={onChangeDataHandler} />
            </div>

            <div className="form__div radio">
                <label className="form__label-block" htmlFor="gender">Gender</label>
                <label className="form__label" htmlFor="gender">Male: <input type="radio" name="gender" value="m" onChange={onChangeDataHandler} /></label >
                <label className="form__label" htmlFor="gender">Female: <input type="radio" name="gender" value="f" onChange={onChangeDataHandler} /></label  >
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="phone">Phone</label>
                <input className="form__input" type="text" name="phone" id="phone" onChange={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="city">City</label>
                <input className="form__input" type="text" name="city" id="city" onChange={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="imgUrl">Image Url</label>
                <input className="form__input" type="text" name="imgUrl" id="imgUrl" onChange={onChangeDataHandler} />
            </div>

            {isDoctorSelected ? (
                <>
                    <div className="form__div">
                        <label className="form__label" htmlFor="specialty">Specialty</label>
                        <input className="form__input" type="text" name="specialty" id="specialty" onChange={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="experience">Experience</label>
                        <input className="form__input" type="text" name="experience" id="experience" onChange={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="education">Education</label>
                        <input className="form__input" type="text" name="education" id="education" onChange={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="workplace">Workplace</label>
                        <input className="form__input" type="text" name="workplace" id="workplace" onChange={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="workdays">Workdays</label>
                        <input className="form__input" type="text" name="workdays" id="workdays" onChange={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="workhours">Workhours</label>
                        <input className="form__input" type="text" name="workhours" id="workhours" onChange={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="price">Price</label>
                        <input className="form__input" type="number" name="price" id="price" onChange={onChangeDataHandler} />
                    </div>

                    <div className="form__div textarea">
                        <label className="form__label" htmlFor="introDescription">Intro Description - max 20 words</label>
                        <textarea className="form__input" name="introDescription" id="introDescription" onChange={onChangeDataHandler}></textarea>
                    </div>

                    <div className="form__div textarea">
                        <label className="form__label" htmlFor="description">Description</label>
                        <textarea className="form__input" name="description" id="description" onChange={onChangeDataHandler}></textarea>
                    </div>
                </>
            ) : null}

            <button className="form__btn">Register</button>
        </form>

    )
}

export default Register;