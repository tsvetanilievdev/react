import { Link } from 'react-router-dom';
import './Doctors.css';
import photoFemale from '../Main/doctor-female.png';
import photoMale from '../Main/doctor.png'

const Doctors = () => {
    const isLogged = true;
    return (
        <>
            <section className="section__browser">

                <div className="browser__wrapper">

                    <form className="filter__form">
                        <div className="form__div__column">
                            <label className="form__label" for="filter">Filter By: </label>
                            <label className='label-inline'>All<input name="all" type="checkbox" value="all" /></label>
                            <label className='label-inline'>Psychologic<input name="psychologic" type="checkbox" value="psychologic" /></label>
                            <label className='label-inline'>Cardiologic<input name="cardiologic" type="checkbox" value="cardiologic" /></label>
                            <label className='label-inline'>Dermatologic<input name="dermatologic" type="checkbox"
                                value="dermatologic" /></label>
                            <label className='label-inline'>Gynecologic<input name="gynecologic" type="checkbox" value="gynecologic" /></label>
                            <label className='label-inline'>Neurologic<input name="neurologic" type="checkbox" value="neurologic" /></label>
                            <label className='label-inline'>Oncologic<input name="oncologic" type="checkbox" value="oncologic" /></label>
                            <label className='label-inline'>Ophthalmologic<input name="ophthalmologic" type="checkbox"
                                value="ophthalmologic" /></label>
                            <label className='label-inline'>Pediatric<input name="pediatric" type="checkbox" value="pediatric" /></label>
                            <label className='label-inline'>Urologic<input name="urologic" type="checkbox" value="urologic" /></label>
                        </div>
                        <input className="form__btn" type="submit" value="Search" />
                    </form>

                    <ul className="doctor-list">

                        <li className="doctor-list__card">
                            <img className='doctor-list__card__img' src={photoFemale} alt="doctor" />
                            <div className="doctor-list__card__info">
                                <h4>Dr. Peter Petrov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                            </div>
                            <div className="doctor-list__card__actions">
                                {isLogged ? <Link to={'/booking/edit'} className="form__btn light-green">Book</Link> : null}

                                <Link to={'/details/i3123'} className="form__btn blue">View Profile</Link>
                            </div>
                        </li>

                        <li className="doctor-list__card">
                            <img className='doctor-list__card__img' src='/images/doctor-female.png' alt="doctor" />
                            <div className="doctor-list__card__info">
                                <h4>Dr. Peter Petrov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                            </div>
                            <div className="doctor-list__card__actions">
                                {isLogged ? <Link to={'/booking/edit'} className="form__btn light-green">Book</Link> : null}
                                <Link to={'/details/i3123'} className="form__btn blue">View Profile</Link>
                            </div>
                        </li>
                        <li className="doctor-list__card">
                            <img className='doctor-list__card__img' src={photoMale} alt="doctor" />
                            <div className="doctor-list__card__info">
                                <h4>Dr. Peter Petrov</h4>
                                <p>Date: 25-04-2023</p>
                                <p>Hour: 09:30</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                                <p>Reason: First</p>
                            </div>
                            <div className="doctor-list__card__actions">
                                {isLogged ? <Link to={'/booking/edit'} className="form__btn light-green">Book</Link> : null}
                                <Link to={'/details/i3123'} className="form__btn blue">View Profile</Link>
                            </div>
                        </li>
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