import { Link } from "react-router-dom";

const DoctorCard = ({
    imgUrl,
    firstName,
    lastName,
    specialty,
    introDescription,
    workingHours,
    workdays,
    _id,
}) => {
    const isLogged = true;
    return (
        <li className="doctor-list__card">
            <img className='doctor-list__card__img' src={imgUrl} alt="doctor" />
            <div className="doctor-list__card__info">
                <h4>Dr. {firstName} {lastName}</h4>
                <p>{specialty}</p>
                <p>Hours: {workingHours}</p>
                <p>Days: {workdays}</p>
            </div>
            <div className="doctor-list__card__actions">
                {isLogged ? <Link to={'/booking/edit'} className="form__btn light-green">Book</Link> : null}

                <Link to={`/details/${_id}`} className="form__btn blue">View Profile</Link>
            </div>
        </li>
    )
}

export default DoctorCard;