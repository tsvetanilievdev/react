import { Link, useParams } from 'react-router-dom';
import './SearchResultsSection.css'
import photo from './doctor-female.png'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/AuthContext.js';
import { getAll } from '../../../services/doctorService.js';
import SearchCard from './SearchCard.js';


const SearchResultsSection = () => {
    const profile = useContext(AuthContext);
    const { location, speciality } = useParams()
    const [searchedDoctors, setSearchedDoctors] = useState([]);
    console.log(location, speciality);
    useEffect(() => {
        getAll(location, speciality)
            .then(data => {
                setSearchedDoctors(data);
            })
    }, [])


    return (
        <section className="section__results">
            <h3>Search for: "search from form!"</h3>

            {searchedDoctors.map((doctor) => <SearchCard key={doctor._id} {...doctor} profile={profile} />)}

        </section>
    );
}

export default SearchResultsSection;
