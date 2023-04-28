import './SearchResultsSection.css'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../../context/AuthContext.js';
import { getAll } from '../../../../services/doctorService.js';
import SearchCard from './SearchCard.js';
import SearchContext from '../../../../context/SearchContext.js';


const SearchResultsSection = () => {
    const profile = useContext(AuthContext);
    const { searchData } = useContext(SearchContext);
    const { location, speciality } = searchData;
    const [searchedDoctors, setSearchedDoctors] = useState([]);

    useEffect(() => {
        getAll(location, speciality)
            .then(data => {
                setSearchedDoctors(data);
            })
    }, [location, speciality])


    return (
        <section className="section__results">
            <h3>Search for: {
                location !== '' && speciality !== ''
                    ? `${location} and ${speciality}`
                    : location !== ''
                        ? location
                        : speciality
            } </h3>

            {searchedDoctors.map((doctor) => <SearchCard key={doctor._id} {...doctor} profile={profile} />)}

        </section>
    );
}

export default SearchResultsSection;
