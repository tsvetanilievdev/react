import { Link } from 'react-router-dom';
import './Doctors.css';
import { useEffect, useState } from 'react';
import { getAll } from '../../services/doctorService.js';
import DoctorCard from './DoctorCard.js';
import DoctorFilterForm from './DoctorFilterForm.js';

const Doctors = () => {

    const [filter, setFilter] = useState({
        hasFilter: false,
        specialities: {
            psychologic: false,
            cardiologic: false,
            dermatologic: false,
            gynecologic: false,
            neurologic: false,
            oncologic: false,
            ophthalmologic: false,
            orthopedic: false,
            pediatric: false,
            urologic: false,
        },
    });
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAll()
            .then(data => {
                setDoctors(data);
                setIsLoading(false);
            })
            .catch(err => setIsLoading(true))
    }, [])

    return (
        <>
            <section className="section__browser">
                <div className="browser__wrapper">
                    <DoctorFilterForm filter={filter} updateFilter={setFilter} />
                    <ul className="doctor-list">
                        {isLoading ? <h1>Loading...</h1> : doctors.map(d => <DoctorCard key={d._id} {...d} />)}
                    </ul>
                </div>

                <div className="pagination">
                    <Link className='page-item' href="#">&laquo;</Link>
                    <Link className='page-item' href="#">1</Link>
                    <Link className='page-item' href="#">2</Link>
                    <Link className='page-item' href="#">3</Link>
                    <Link className='page-item' href="#">&raquo;</Link>
                </div>
            </section>
        </>
    )
}

export default Doctors;