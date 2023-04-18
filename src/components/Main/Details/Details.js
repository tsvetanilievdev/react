import { Link, useParams } from 'react-router-dom';
import './Details.css';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext.js';

const Details = () => {
    const id = useParams().id;
    const { user } = useContext(AuthContext);

    return (
        <section className="section__details">
            <div className="section__details__wrapper">
                <div className="details__info">
                    <img className="details__info__img" src="./images/doctor.png" alt="doctor" />
                    <h3 className="details__info__name">Dr. Livandro Ivankov</h3>
                    <p className="details__info__speciality">Specialty: Cardiologist</p>
                    <p className="details__info__education">Education: University of Medicine</p>
                    <p className="details__info__experience">Experience: 10 years</p>
                </div>

                <div className="details__contacts">
                    <p className="details__contacts__workplace">Workplace: <span> Clinic 1</span></p>
                    <p className="details__contacts__workdays">Workdays: <span> Monday - Friday</span></p>
                    <p className="details__contacts__workhours">Workhours: <span> 8:00 - 16:00</span></p>
                    <p className="details__contacts__price">Price: <span> 100$</span></p>
                    <p className="details__contacts__phone">Phone: <span> 032012391209</span></p>
                </div>

                <div className="details__description">
                    <p className="details__description__text">Description: Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Iste molestias consequuntur
                        praesentium assumenda reprehenderit maxime! Dicta nobis hic nesciunt quos, fuga alias laborum
                        velit
                        aperiam ut voluptatibus delectus consequuntur, amet quia! Assumenda nihil alias impedit minima
                        ipsa
                        nostrum voluptatibus cum exercitationem qui totam eius aliquam nobis harum voluptatem, fugiat
                        magnam
                        quam aut, cumque eligendi! Beatae doloremque dicta natus excepturi eveniet placeat libero quidem
                        esse
                        dolorum. Voluptates, exercitationem eius eaque iste doloremque odit adipisci. Dolorum,
                        voluptatem?
                        Iusto
                        iste cum quaerat quidem? </p>
                </div>
            </div>
            {user.isLogged ? (
                <Link className="btn details__btn" to={`/booking/${id}`}>Book online</Link>) : (
                <Link className="btn details__btn" to="/login">Login to book</Link>
            )}

        </section>
    )
};

export default Details;