import { useContext, useState } from 'react';
import './SearchSection.css'
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../../context/SearchContext.js';

const SearchSection = () => {
    const navigate = useNavigate();
    const { searchData, updateSearch } = useContext(SearchContext);

    const onInputChange = (e) => {
        updateSearch((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <section className="section__search">
            <form className="search__form" onSubmit={(e) => {
                e.preventDefault();
                const { location, speciality } = Object.fromEntries(new FormData(e.target));
                updateSearch((state) => ({
                    ...state,
                    location,
                    speciality
                }));
                let url = `/search`;
                if (searchData.location !== '' && searchData.speciality !== '') {
                    url += `?location=${searchData.location}&speciality=${searchData.speciality}`;
                } else if (searchData.location !== '') {
                    url += `?location=${searchData.location}`;
                } else if (searchData.speciality !== '') {
                    url += `?speciality=${searchData.speciality}`;
                }
                navigate(url);
            }}>
                <h3 className="search__form__title">Search Doctor, Make an Appointment</h3>
                <h4 className="search__form__subtitle">Discover the best doctors, clinic & hospital the city nearest to you.
                </h4>

                <div className="label__wrapper">

                    <label className="search__form__label">
                        <input className="search__form__label__input" type="text" placeholder="Search location" name='location' />
                        <span className="search__form__label__info">Based on your Location</span>

                    </label>

                    <label className="search__form__label">
                        <input className="search__form__label__input" type="text" placeholder="Search Doctors" name='speciality' />
                        <span className="search__form__label__info"> Ex : Dental or Pediater up etc </span>
                    </label>

                </div>
                <button to="/search" className="search__form__btn">Search</button>
            </form>
        </section>
    )
}

export default SearchSection;