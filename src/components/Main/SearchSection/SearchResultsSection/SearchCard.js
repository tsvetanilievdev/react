import { Link } from "react-router-dom"

const SearchCard = ({
    firstName,
    lastName,
    imgUrl,
    education,
    speciality,
    city,
    profile,
    _id
}) => {

    return (
        <div className="doctor__card">

            <div className="card card-info">
                <img src={imgUrl} alt="" />
                <div className="info">
                    <h3 className="info__name">{firstName} {lastName}</h3>
                    <p className="info__graduate">{education}</p>
                    <h4 className="info__spec">{speciality}</h4>
                    <p className="info__city">{city}</p>
                </div>
            </div>

            <div className="card card-book">

                {profile.profile.isLogged ? (
                    <>
                        <div className="info">
                            <h5 className="info__price">300 - 1000 $</h5>
                            <p className="info__location">Medical Center Varna City</p>
                            <span className="info__workdays">Monday - Friday</span>
                            <p className="info__workinghours">08:00 - 16:00</p>
                        </div>
                        <Link to={`/booking/${_id}`} className="card__btn">Book now!</Link>
                    </>
                ) : (
                    <div className="card card-guest">
                        <div className="info guest">
                            <h5 className="info__price">For more info please login</h5>
                            <Link className="card__btn" to="/login">Login</Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default SearchCard;