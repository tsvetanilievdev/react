import { Link } from 'react-router-dom';
import './SearchSection.css'

const SearchSection = () => {

    return (

        <section className="section__search">
            <form className="search__form" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <h3 className="search__form__title">Search Doctor, Make an Appointment</h3>
                <h4 className="search__form__subtitle">Discover the best doctors, clinic & hospital the city nearest to you.
                </h4>

                <div className="label__wrapper">

                    <label className="search__form__label">
                        <input className="search__form__label__input" type="text" placeholder="Search location" />
                        <span className="search__form__label__info">Based on your Location</span>

                    </label>

                    <label className="search__form__label">
                        <input className="search__form__label__input" type="text" placeholder="Search Doctors" />
                        <span className="search__form__label__info"> Ex : Dental or Pediater up etc </span>
                    </label>

                </div>
                <button className="search__form__btn"><Link to="/search">Search</Link></button>
            </form>
        </section>
    )
}

export default SearchSection;