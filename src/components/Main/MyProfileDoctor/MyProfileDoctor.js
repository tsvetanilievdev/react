import './MyProfileDoctor.css';
import photo from '../doctor.png'
import { Link } from 'react-router-dom';

const MyProfileDoctor = (props) => {

    const isConfirmed = true;
    const eventStatus = 'UPCOMING';


    return (
        <section className='section__myProfileDoctor'>
            <h3>Doctor ==NAME== Profile</h3>
            <div className="card__myProfileDoctor">

                <div className="details__info myProfileDoctor">
                    <img className="details__info__img" src={photo} alt="doctor" />
                    <h3 className="details__info__name">Dr. Livandro Ivankov</h3>
                    <p className="details__info__speciality">Specialty: Cardiologist</p>
                    <p className="details__info__education">Education: University of Medicine</p>
                    <p className="details__info__experience">Experience: 10 years</p>
                    <Link to={`/profile-doctor/edit/jdjsajdajsdjas`} className='form__btn light-green'>Edit</Link>
                </div>

                <ul className="booking-list myProfileDoctor">
                    <li>
                        <div className={`booking-item ${eventStatus === 'PAST' ? 'past' : 'upcoming'}`}>
                            <img className='booking-item__info' src={photo} alt="patiant" />
                            <div className="booking-item__info">
                                <h4>Peter Petrov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                                <p className='booking-item__info__status'>Status: {eventStatus === 'PAST' ? 'PAST' : 'UPCOMING'}</p>
                            </div>
                            <div className="booking-item__actions">

                                {eventStatus === 'UPCOMING' ? (
                                    <>
                                        {!isConfirmed ? (
                                            <>
                                                <Link to={'/booking/i3123'} className="form__btn green">Confirm</Link>
                                                <Link to={'/booking/isaadasd'} className="form__btn red">Cancel</Link>
                                            </>
                                        ) : (
                                            <>
                                                <Link to={'/booking/djashdjashjdsjh/edit'} className="form__btn light-green">Edit</Link>
                                                <Link to={'/booking/delete'} className="form__btn dark-red">Delete</Link>
                                            </>
                                        )}
                                    </>
                                ) : null}

                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="booking-item">
                            <img className='booking-item__info' src={photo} alt="patiant" />
                            <div className="booking-item__info">
                                <h4>Peter Petrov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                            </div>
                            <div className="booking-item__actions">
                                {!isConfirmed ? (
                                    <>
                                        <Link to={'/booking/i3123'} className="form__btn green">Confirm</Link>
                                        <Link to={'/booking/isaadasd'} className="form__btn red">Cancel</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={'/booking/edit'} className="form__btn light-green">Edit</Link>
                                        <Link to={'/booking/delete'} className="form__btn dark-red">Delete</Link>
                                    </>
                                )}

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="booking-item">
                            <img className='booking-item__info' src={photo} alt="patiant" />
                            <div className="booking-item__info">
                                <h4>Peter Petrov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                            </div>
                            <div className="booking-item__actions">
                                {!isConfirmed ? (
                                    <>
                                        <Link to={'/booking/i3123'} className="form__btn green">Confirm</Link>
                                        <Link to={'/booking/isaadasd'} className="form__btn red">Cancel</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={'/booking/edit'} className="form__btn light-green">Edit</Link>
                                        <Link to={'/booking/delete'} className="form__btn dark-red">Delete</Link>
                                    </>
                                )}

                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="booking-item">
                            <img className='booking-item__info' src={photo} alt="patiant" />
                            <div className="booking-item__info">
                                <h4>Peter Petrov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                            </div>
                            <div className="booking-item__actions">
                                {!isConfirmed ? (
                                    <>
                                        <Link to={'/booking/i3123'} className="form__btn green">Confirm</Link>
                                        <Link to={'/booking/isaadasd'} className="form__btn red">Cancel</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={'/booking/edit'} className="form__btn light-green">Edit</Link>
                                        <Link to={'/booking/delete'} className="form__btn dark-red">Delete</Link>
                                    </>
                                )}

                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="booking-item">
                            <img className='booking-item__info' src={photo} alt="patiant" />
                            <div className="booking-item__info">
                                <h4>Peter Petrov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                            </div>
                            <div className="booking-item__actions">
                                {!isConfirmed ? (
                                    <>
                                        <Link to={'/booking/i3123'} className="form__btn green">Confirm</Link>
                                        <Link to={'/booking/isaadasd'} className="form__btn red">Cancel</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={'/booking/edit'} className="form__btn light-green">Edit</Link>
                                        <Link to={'/booking/delete'} className="form__btn dark-red">Delete</Link>
                                    </>
                                )}

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default MyProfileDoctor;