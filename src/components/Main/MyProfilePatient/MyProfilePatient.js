import './MyProfilePatient.css';
import photo from '../doctor.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext.js';

const MyProfileUser = (props) => {
    const { profile } = useContext(AuthContext);
    console.log(profile);
    const eventStatus = 'PAST';
    const eventConfirmed = false;

    return (
        <section className='section__myProfileUser'>
            <h3>Patient Profile - {profile.name}</h3>
            <div className="card__myProfileUser">

                <div className="details__info myProfileUser">
                    <img className="details__info__img" src={profile.imgUrl} alt="doctor" />
                    <h3 className="details__info__name">{profile.name}</h3>
                    <p className="details__info__age">Age: {profile.age}</p>
                    <p className="details__info__City">City: {profile.city}</p>
                    <Link to={`/profile-patient/edit/${profile.id}`} className='form__btn light-green'>Edit</Link>
                </div>

                <ul className="booking-list myProfileUser">
                    <li>
                        <div className={`booking-item ${eventStatus === 'PAST' ? 'past' : 'upcoming'}`}>
                            <img className='booking-item__info' src={photo} alt="doctor" />
                            <div className='booking-item__info'>
                                <h4>Dr Andrei Ivanov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                                <p class={`booking-item__info__confirm ${eventConfirmed ? 'confirmed' : 'pending'}`} >{eventConfirmed ? 'Confirmed' : 'Pending'}</p>
                                <p className='booking-item__info__status'>Status: {eventStatus === 'PAST' ? 'PAST' : 'UPCOMING'}</p>
                            </div>
                            <div className="booking-item__actions">
                                {eventStatus === 'UPCOMING' ? (
                                    <Link to={'/booking/isaadasd/edit'} className="form__btn red">Cancel</Link>
                                ) : null}
                            </div>
                        </div>
                    </li>


                </ul>

            </div>
        </section>

    )
}

export default MyProfileUser;