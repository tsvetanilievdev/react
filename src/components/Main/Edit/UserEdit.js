
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './UserEdit.css'
const UserEdit = () => {
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
        <form className="form edit-user__form" onSubmit={onSubmitForm}>
            <h1 className="form__title">Edit User Form</h1>

            <div className="form__div" >
                <label className="form__label" htmlFor="email">Email</label>
                <input className="form__input" type="email" name="email" id="email" onBlur={onChangeDataHandler} />
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

            <Link to={`/profile-user`} className="form__btn">Edit User</Link >
        </form>

    )
}

export default UserEdit;