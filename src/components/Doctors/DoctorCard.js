import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";

const DoctorCard = ({
    imgUrl,
    firstName,
    lastName,
    city,
    specialty,
    introDescription,
    workingHours,
    workdays,
    _id,
}) => {
    const { profile } = useContext(AuthContext);
    return (
        <li className="doctor-list__card">
            <img className='doctor-list__card__img' src={imgUrl} alt="doctor" />
            <div className="doctor-list__card__info">
                <h4>Dr. {firstName} {lastName}</h4>
                <p>{specialty}</p>
                <p>{introDescription}</p>
                <p>Hours: {workingHours}</p>
                <p>Days: {workdays}</p>
                <p>City: {city}</p>
            </div>
            <div className="doctor-list__card__actions">
                {profile.isLogged ? <Link to={`/booking/${_id}`} className="form__btn light-green">Book</Link> : null}

                <Link to={`/details/${_id}`} className="form__btn blue">View Profile</Link>
            </div>
        </li>
    )
}

export default DoctorCard;