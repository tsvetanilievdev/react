import { Link, useParams } from 'react-router-dom';
import './Details.css';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/AuthContext.js';
import { getOne } from '../../../services/doctorService.js';

const Details = () => {
    const id = useParams().id;
    const { profile } = useContext(AuthContext);
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        getOne(id)
            .then(data => {
                setDoctor(data);
            })
    }, [])
    return (
        <section className="section__details">
            <div className="section__details__wrapper">
                <div className="details__info">
                    <img className="details__info__img" src={doctor.imgUrl} alt="doctor" />
                    <h3 className="details__info__name">Dr. {doctor.firstName} {doctor.lastName}</h3>
                    <p className="details__info__speciality">Specialty: {doctor.speciality}</p>
                    <p className="details__info__education">Education: {doctor.education}</p>
                    <p className="details__info__experience">Experience: {doctor.experience}</p>
                </div>

                <div className="details__contacts">
                    <p className="details__contacts__workplace">Workplace: <span> {doctor.workplace}</span></p>
                    <p className="details__contacts__workdays">Workdays: <span> {doctor.workdays}</span></p>
                    <p className="details__contacts__workhours">Workhours: <span> {doctor.workingHour}</span></p>
                    <p className="details__contacts__price">Price: <span> {doctor.price}$</span></p>
                    <p className="details__contacts__phone">Phone: <span> {doctor.phone}</span></p>
                </div>

                <div className="details__description">
                    <p className="details__description__text">Description: {doctor.description} </p>
                </div>
            </div>
            {profile.isLogged ? (
                <Link className="btn details__btn" to={`/booking/${id}`}>Book online</Link>) : (
                <Link className="btn details__btn" to="/login">Login to book</Link>
            )}

        </section>
    )
};

export default Details;