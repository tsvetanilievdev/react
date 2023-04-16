import { useState } from 'react';
import './Register.css'
const Register = () => {
    const [isDoctorSelected, setIsDoctorSelected] = useState(false);

    return (
        <form className="form register__form">
            <h1 className="form__title">Register Form</h1>
            <div className="form__div">
                <label className="form__label" for="role">Role</label>
                <select className="form__input" name="role" id="role" onChange={(e) => {
                    if (e.target.value === 'doctor') {
                        setIsDoctorSelected(true);
                    } else {
                        setIsDoctorSelected(false);
                    }
                }}>
                    <option value="user">User</option>
                    <option value="doctor">Doctor</option>
                </select>
            </div>
            <div className="form__div">
                <label className="form__label" for="email">Email</label>
                <input className="form__input" type="email" name="email" id="email" />
            </div>
            <div className="form__div">
                <label className="form__label" for="firstName">First name</label>
                <input className="form__input" type="text" name="firstName" id="firstName" />
            </div>
            <div className="form__div">
                <label className="form__label" for="lastName">Last name</label>
                <input className="form__input" type="text" name="lastName" id="lastName" />
            </div>
            <div className="form__div">
                <label className="form__label" for="password">Password</label>
                <input className="form__input" type="password" name="password" id="password" />
            </div>
            <div className="form__div">
                <label className="form__label" for="password2">Confirm Password</label>
                <input className="form__input" type="password" name="password2" id="password2" />
            </div>
            <div className="form__div">
                <label className="form__label" for="imgUrl">Image Url</label>
                <input className="form__input" type="text" name="imgUrl" id="imgUrl" />
            </div>
            <div className="form__div">
                <label className="form__label" for="age">Age</label>
                <input className="form__input" type="text" name="age" id="age" />
            </div>
            <div className="form__div radio">
                <label className="form__label-block" for="sex">Sex</label>
                <label className="form__label" for="sex">Male: <input type="radio" name="sex" value="m" /></label >

                <label className="form__label" for="sex">Female: <input type="radio" name="sex" value="f" /></label >

            </div>

            <div className="form__div">
                <label className="form__label" for="city">City</label>
                <input className="form__input" type="text" name="city" id="city" />
            </div>

            <div className="form__div">
                <label className="form__label" for="phone">Phone</label>
                <input className="form__input" type="text" name="phone" id="phone" />
            </div>

            {isDoctorSelected ? (
                <>
                    <div className="form__div">
                        <label className="form__label" for="specialty">Specialty</label>
                        <input className="form__input" type="text" name="specialty" id="specialty" />
                    </div>
                    <div className="form__div">
                        <label className="form__label" for="experience">Experience</label>
                        <input className="form__input" type="text" name="experience" id="experience" />
                    </div>
                    <div className="form__div">
                        <label className="form__label" for="education">Education</label>
                        <input className="form__input" type="text" name="education" id="education" />
                    </div>
                    <div className="form__div">
                        <label className="form__label" for="workplace">Workplace</label>
                        <input className="form__input" type="text" name="workplace" id="workplace" />
                    </div>
                    <div className="form__div">
                        <label className="form__label" for="workdays">Workdays</label>
                        <input className="form__input" type="text" name="workdays" id="workdays" />
                    </div>
                    <div className="form__div">
                        <label className="form__label" for="workhours">Workhours</label>
                        <input className="form__input" type="text" name="workhours" id="workhours" />
                    </div>
                    <div className="form__div">
                        <label className="form__label" for="price">Price</label>
                        <input className="form__input" type="number" name="price" id="price" />
                    </div>
                    <div className="form__div textarea">
                        <label className="form__label" for="description">Description</label>
                        <textarea className="form__input" name="description" id="description"></textarea>
                    </div>
                </>
            ) : null}

            <button className="form__btn">Register</button>
        </form>

    )
}

export default Register;