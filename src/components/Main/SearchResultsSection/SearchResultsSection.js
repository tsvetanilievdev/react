import { Link } from 'react-router-dom';
import './SearchResultsSection.css'
import photo from './doctor-female.png'
const SearchResultsSection = () => {

    const isLogged = false;
    return (
        <section className="section__results">
            <h3>Search for: "search from form!"</h3>

            <div className="doctor__card">

                <div className="card card-info">
                    <img src={photo} alt="" />
                    <div className="info">
                        <h3 className="info__name">Ivana Ivanova</h3>
                        <p className="info__graduate">Medical University - Dental Medicine</p>
                        <h4 className="info__spec">Dentist</h4>
                        <p className="info__city">Varna, Bulgara</p>
                    </div>
                </div>

                <div className="card card-book">

                    {isLogged ? (
                        <>
                            <div className="info">
                                <h5 className="info__price">300 - 1000 $</h5>
                                <p className="info__location">Medical Center Varna City</p>
                                <span className="info__workdays">Monday - Friday</span>
                                <p className="info__workinghours">08:00 - 16:00</p>
                            </div>
                            <button className="card__btn">Book now!</button>
                        </>
                    ) : (
                        <div class="card card-guest">
                            <div class="info guest">
                                <h5 class="info__price">For more info please login</h5>
                                <Link class="card__btn" to="/login">Login</Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="doctor__card">

                <div className="card card-info">
                    <img src={photo} alt="" />
                    <div className="info">
                        <h3 className="info__name">Ivana Ivanova</h3>
                        <p className="info__graduate">Medical University - Dental Medicine</p>
                        <h4 className="info__spec">Dentist</h4>
                        <p className="info__city">Varna, Bulgara</p>
                    </div>
                </div>

                <div className="card card-book">

                    {isLogged ? (
                        <>
                            <div className="info">
                                <h5 className="info__price">300 - 1000 $</h5>
                                <p className="info__location">Medical Center Varna City</p>
                                <span className="info__workdays">Monday - Friday</span>
                                <p className="info__workinghours">08:00 - 16:00</p>
                            </div>
                            <button className="card__btn">Book now!</button>
                        </>
                    ) : (
                        <div class="card card-guest">
                            <div class="info guest">
                                <h5 class="info__price">For more info please login</h5>
                                <Link class="card__btn" to="/login">Login</Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="doctor__card">

                <div className="card card-info">
                    <img src={photo} alt="" />
                    <div className="info">
                        <h3 className="info__name">Ivana Ivanova</h3>
                        <p className="info__graduate">Medical University - Dental Medicine</p>
                        <h4 className="info__spec">Dentist</h4>
                        <p className="info__city">Varna, Bulgara</p>
                    </div>
                </div>

                <div className="card card-book">

                    {isLogged ? (
                        <>
                            <div className="info">
                                <h5 className="info__price">300 - 1000 $</h5>
                                <p className="info__location">Medical Center Varna City</p>
                                <span className="info__workdays">Monday - Friday</span>
                                <p className="info__workinghours">08:00 - 16:00</p>
                            </div>
                            <button className="card__btn">Book now!</button>
                        </>
                    ) : (
                        <div class="card card-guest">
                            <div class="info guest">
                                <h5 class="info__price">For more info please login</h5>
                                <Link class="card__btn" to="/login">Login</Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="doctor__card">

                <div className="card card-info">
                    <img src={photo} alt="" />
                    <div className="info">
                        <h3 className="info__name">Ivana Ivanova</h3>
                        <p className="info__graduate">Medical University - Dental Medicine</p>
                        <h4 className="info__spec">Dentist</h4>
                        <p className="info__city">Varna, Bulgara</p>
                    </div>
                </div>

                <div className="card card-book">

                    {isLogged ? (
                        <>
                            <div className="info">
                                <h5 className="info__price">300 - 1000 $</h5>
                                <p className="info__location">Medical Center Varna City</p>
                                <span className="info__workdays">Monday - Friday</span>
                                <p className="info__workinghours">08:00 - 16:00</p>
                            </div>
                            <button className="card__btn">Book now!</button>
                        </>
                    ) : (
                        <div class="card card-guest">
                            <div class="info guest">
                                <h5 class="info__price">For more info please login</h5>
                                <Link class="card__btn" to="/login">Login</Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="doctor__card">

                <div className="card card-info">
                    <img src={photo} alt="" />
                    <div className="info">
                        <h3 className="info__name">Ivana Ivanova</h3>
                        <p className="info__graduate">Medical University - Dental Medicine</p>
                        <h4 className="info__spec">Dentist</h4>
                        <p className="info__city">Varna, Bulgara</p>
                    </div>
                </div>

                <div className="card card-book">

                    {isLogged ? (
                        <>
                            <div className="info">
                                <h5 className="info__price">300 - 1000 $</h5>
                                <p className="info__location">Medical Center Varna City</p>
                                <span className="info__workdays">Monday - Friday</span>
                                <p className="info__workinghours">08:00 - 16:00</p>
                            </div>
                            <button className="card__btn">Book now!</button>
                        </>
                    ) : (
                        <div class="card card-guest">
                            <div class="info guest">
                                <h5 class="info__price">For more info please login</h5>
                                <Link class="card__btn" to="/login">Login</Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="doctor__card">

                <div className="card card-info">
                    <img src={photo} alt="" />
                    <div className="info">
                        <h3 className="info__name">Ivana Ivanova</h3>
                        <p className="info__graduate">Medical University - Dental Medicine</p>
                        <h4 className="info__spec">Dentist</h4>
                        <p className="info__city">Varna, Bulgara</p>
                    </div>
                </div>

                <div className="card card-book">

                    {isLogged ? (
                        <>
                            <div className="info">
                                <h5 className="info__price">300 - 1000 $</h5>
                                <p className="info__location">Medical Center Varna City</p>
                                <span className="info__workdays">Monday - Friday</span>
                                <p className="info__workinghours">08:00 - 16:00</p>
                            </div>
                            <button className="card__btn">Book now!</button>
                        </>
                    ) : (
                        <div class="card card-guest">
                            <div class="info guest">
                                <h5 class="info__price">For more info please login</h5>
                                <Link class="card__btn" to="/login">Login</Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>


        </section>
    );
}

export default SearchResultsSection;
