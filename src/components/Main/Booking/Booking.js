import { useState } from 'react';
import './Booking.css'
const Booking = () => {
    const [reason, setReason] = useState('first');
    const [data, setData] = useState({
        date: '',
        timeStart: '',
        reason: 'first',
        price: 200,
        description: '',
    });

    console.log(data.reason)
    const onChangeDataHandler = (e) => {
        if (e.target.name === 'reason') {
            console.log("Reason", e.target.value)
            setReason(e.target.value);
        }
        setData(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        console.log('booking', data)
    }

    return (
        <form className="form register__form" onSubmit={onSubmitForm}>
            <h1 className="form__title">Book hour for Dr. Ivan Ivanov</h1>


            <div className="form__div" >
                <label className="form__label" htmlFor="date">Date</label>
                <input className="form__input" type="date" name="date" id="date" onBlur={onChangeDataHandler} />
            </div>

            <div className="form__div" >
                <label className="form__label" htmlFor="timeStart">Time Start</label>
                <select className="form__input" name="timeStart" id="timeStart" onChange={onChangeDataHandler}>
                    <option value="08-00">08:00</option>
                    <option value="08-15">08:15</option>
                    <option value="08-30">08:30</option>
                    <option value="08-45">08:45</option>
                    <option value="09-00">09:00</option>
                    <option value="09-15">09:15</option>
                    <option value="09-30">09:30</option>
                    <option value="09-45">09:45</option>
                    <option value="10-00">10:00</option>
                    <option value="10-15">10:15</option>
                    <option value="10-30">10:30</option>
                    <option value="10-45">10:45</option>
                    <option value="11-00">11:00</option>
                    <option value="11-15">11:15</option>
                    <option value="11-30">11:30</option>
                    <option value="11-45">11:45</option>
                    <option value="12-00">12:00</option>
                    <option value="12-15">12:15</option>
                    <option value="12-30">12:30</option>
                    <option value="12-45">12:45</option>
                    <option value="13-00">13:00</option>
                    <option value="13-15">13:15</option>
                    <option value="13-30">13:30</option>
                    <option value="13-45">13:45</option>
                    <option value="14-00">14:00</option>
                    <option value="14-15">14:15</option>
                    <option value="14-30">14:30</option>
                    <option value="14-45">14:45</option>
                    <option value="15-00">15:00</option>
                    <option value="15-15">15:15</option>
                    <option value="15-30">15:30</option>
                    <option value="15-45">15:45</option>
                    <option value="16-00">16:00</option>
                    <option value="16-15">16:15</option>
                    <option value="16-30">16:30</option>
                    <option value="16-45">16:45</option>
                    <option value="17-00">17:00</option>
                    <option value="17-15">17:15</option>
                    <option value="17-30">17:30</option>
                    <option value="17-45">17:45</option>
                    <option value="18-00">18:00</option>
                </select>
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="role">Reason</label>
                <select className="form__input" name="reason" id="reason" onChange={onChangeDataHandler} defaultValue={data.reason}>
                    <option value="first">First Check</option>
                    <option value="periodic">Periodic Check</option>
                </select>
            </div>

            <div className="form__div">
                <label className="form__label" htmlFor="role">Price</label>
                <input className="form__input" type="text" name="price" id="price" disabled value={data.reason === 'first' ? data.price : (data.price * 0.8)} />
            </div>

            <div className="form__div" >
                <label className="form__label" htmlFor="description">Description</label>
                <textarea className="form__input" type="text" name="description" id="description" onBlur={onChangeDataHandler} />
            </div>

            <button className="form__btn">Book</button>
        </form>

    )
}

export default Booking;