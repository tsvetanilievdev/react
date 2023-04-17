import { useState } from 'react';
import './Register.css'
const Register = () => {
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
        console.log(e.target.name);
        setData(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (data.role === 'user') {
            const userData = {
                role: data.role,
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
            console.log('user', userData);
            //to fetch data;
        } else {
            console.log('doctor', data)
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
                <input className="form__input" type="email" name="email" id="email" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="password">Password</label>
                <input className="form__input" type="password" name="password" id="password" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="password2">Confirm Password</label>
                <input className="form__input" type="password" name="password2" id="password2" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="firstName">First name</label>
                <input className="form__input" type="text" name="firstName" id="firstName" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="lastName">Last name</label>
                <input className="form__input" type="text" name="lastName" id="lastName" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="age">Age</label>
                <input className="form__input" type="number" name="age" id="age" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div radio">
                <label className="form__label-block" htmlFor="gender">Gender</label>
                <label className="form__label" htmlFor="gender">Male: <input type="radio" name="gender" value="m" onBlur={onChangeDataHandler} /></label >
                <label className="form__label" htmlFor="gender">Female: <input type="radio" name="gender" value="f" onBlur={onChangeDataHandler} /></label  >
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="phone">Phone</label>
                <input className="form__input" type="text" name="phone" id="phone" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="city">City</label>
                <input className="form__input" type="text" name="city" id="city" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="imgUrl">Image Url</label>
                <input className="form__input" type="text" name="imgUrl" id="imgUrl" onBlur={onChangeDataHandler} />
            </div>

            {isDoctorSelected ? (
                <>
                    <div className="form__div">
                        <label className="form__label" htmlFor="specialty">Specialty</label>
                        <input className="form__input" type="text" name="specialty" id="specialty" onBlur={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="experience">Experience</label>
                        <input className="form__input" type="text" name="experience" id="experience" onBlur={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="education">Education</label>
                        <input className="form__input" type="text" name="education" id="education" onBlur={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="workplace">Workplace</label>
                        <input className="form__input" type="text" name="workplace" id="workplace" onBlur={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="workdays">Workdays</label>
                        <input className="form__input" type="text" name="workdays" id="workdays" onBlur={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="workhours">Workhours</label>
                        <input className="form__input" type="text" name="workhours" id="workhours" onBlur={onChangeDataHandler} />
                    </div>
                    <div className="form__div">
                        <label className="form__label" htmlFor="price">Price</label>
                        <input className="form__input" type="number" name="price" id="price" onBlur={onChangeDataHandler} />
                    </div>

                    <div className="form__div textarea">
                        <label className="form__label" htmlFor="introDescription">Intro Description - max 20 words</label>
                        <textarea className="form__input" name="introDescription" id="introDescription"></textarea>
                    </div>

                    <div className="form__div textarea">
                        <label className="form__label" htmlFor="description">Description</label>
                        <textarea className="form__input" name="description" id="description"></textarea>
                    </div>
                </>
            ) : null}

            <button className="form__btn">Register</button>
        </form>

    )
}

export default Register;