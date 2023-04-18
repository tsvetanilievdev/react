import { Link } from 'react-router-dom';
import './DoctorsPreviewSection.css';
import photo from './doctor.png'
import { useEffect, useState } from 'react';
import { getAll } from '../../../../services/doctorService.js';
import DoctorPreviewCard from './DoctorPreviewCard.js';
const DoctorsPreviewSection = () => {

    const [bestDoctors, setBestDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAll()
            .then(data => {
                console.log(data);
                setBestDoctors(data);
                setIsLoading(false);
            })
            .catch(err => setIsLoading(true))
    }, [])



    return (
        <section className="section__doctors">
            <h1 className="section__doctors__title">Our best doctors:</h1>
            {isLoading ? <h1>Loading...</h1> : bestDoctors.map(d => <DoctorPreviewCard key={d._id} {...d} />)}
        </section>
    )
}

export default DoctorsPreviewSection;