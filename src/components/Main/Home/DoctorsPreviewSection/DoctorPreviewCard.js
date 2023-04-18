import { Link } from "react-router-dom"

const DoctorPreviewCard = ({
    firstName,
    lastName,
    imgUrl,
    specialty,
    introDescription,
    _id
}) => {

    return (
        <article className="doctor__preview">
            <h2 className="doctor__preview__name">{firstName} {lastName}</h2>
            <img className="doctor__preview__img" src={imgUrl} alt="doctor" />
            <p className="doctor__preview__info">{introDescription}</p>
            <footer className="doctor__preview__spec">{specialty}</footer>
            <Link to={`/details/${_id}`} className="doctor__preview__btn">Запази час!</Link>
        </article>
    )
}

export default DoctorPreviewCard;