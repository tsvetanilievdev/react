import { Link } from 'react-router-dom';
import './DoctorsPreviewSection.css';
import photo from './doctor.png'
const DoctorsPreviewSection = () => {


    return (
        <section className="section__doctors">
            <h1 className="section__doctors__title">Our best doctors:</h1>

            <article className="doctor__preview">
                <h2 className="doctor__preview__name">Ivan Ivanov</h2>
                <img className="doctor__preview__img" src={photo} alt="doctor" />
                <p className="doctor__preview__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <footer className="doctor__preview__spec">Педиатър</footer>
                <Link to={`/details/312312`} className="doctor__preview__btn">Запази час!</Link>
            </article>

            <article className="doctor__preview">
                <h2 className="doctor__preview__name">Maria Ignatova</h2>
                <img className="doctor__preview__img" src={photo} alt="doctor" />
                <p className="doctor__preview__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <footer className="doctor__preview__spec">Гинеколог</footer>
                <Link to={`/details/312312`} className="doctor__preview__btn">Запази час!</Link>
            </article>

            <article className="doctor__preview">
                <h2 className="doctor__preview__name">Georgi Donkov</h2>
                <img className="doctor__preview__img" src={photo} alt="doctor" />
                <p className="doctor__preview__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Nostrum laborum enim accusamus.
                </p>
                <footer className="doctor__preview__spec">Ортопед</footer>
                <Link to={`/details/312312`} className="doctor__preview__btn">Запази час!</Link>
            </article>
        </section>
    )
}

export default DoctorsPreviewSection;