import './MyProfileUser.css';
import photo from '../doctor.png'
import { Link } from 'react-router-dom';

const MyProfileUser = (props) => {

    const eventStatus = 'PAST';

    return (
        <section className='section__myProfileUser'>
            <h3>Patient ==NAME==  Profile</h3>
            <div className="card__myProfileUser">

                <div className="details__info myProfileUser">
                    <img className="details__info__img" src={photo} alt="doctor" />
                    <h3 className="details__info__name">Edandro Ivankov</h3>
                    <p className="details__info__age">Age: 33</p>
                    <p className="details__info__City">City: Varna</p>
                    <p className="details__info__phone">Phone: 0888 382812</p>
                    <Link className='form__btn light-green'>Edit</Link>
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
                                <p className='booking-item__info__status'>Status: {eventStatus === 'PAST' ? 'PAST' : 'UPCOMING'}</p>
                            </div>
                            <div className="booking-item__actions">
                                {eventStatus === 'UPCOMING' ? (
                                    <Link to={'/booking/isaadasd'} className="form__btn red">Cancel</Link>
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