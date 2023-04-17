import { Link, useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const id = useParams().id;
    console.log(id);
    return (
        <section class="section__details">
            <div class="section__details__wrapper">
                <div class="details__info">
                    <img class="details__info__img" src="./images/doctor.png" alt="doctor" />
                    <h3 class="details__info__name">Dr. Livandro Ivankov</h3>
                    <p class="details__info__speciality">Specialty: Cardiologist</p>
                    <p class="details__info__education">Education: University of Medicine</p>
                    <p class="details__info__experience">Experience: 10 years</p>
                </div>

                <div class="details__contacts">
                    <p class="details__contacts__workplace">Workplace: <span> Clinic 1</span></p>
                    <p class="details__contacts__workdays">Workdays: <span> Monday - Friday</span></p>
                    <p class="details__contacts__workhours">Workhours: <span> 8:00 - 16:00</span></p>
                    <p class="details__contacts__price">Price: <span> 100$</span></p>
                    <p class="details__contacts__phone">Phone: <span> 032012391209</span></p>
                </div>

                <div class="details__description">
                    <p class="details__description__text">Description: Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Iste molestias consequuntur
                        praesentium assumenda reprehenderit maxime! Dicta nobis hic nesciunt quos, fuga alias laborum
                        velit
                        aperiam ut voluptatibus delectus consequuntur, amet quia! Assumenda nihil alias impedit minima
                        ipsa
                        nostrum voluptatibus cum exercitationem qui totam eius aliquam nobis harum voluptatem, fugiat
                        magnam
                        quam aut, cumque eligendi! Beatae doloremque dicta natus excepturi eveniet placeat libero quidem
                        esse
                        dolorum. Voluptates, exercitationem eius eaque iste doloremque odit adipisci. Dolorum,
                        voluptatem?
                        Iusto
                        iste cum quaerat quidem? </p>
                </div>
            </div>
            <Link class="btn details__btn" to={`/book/${id}`}>Book online</Link>
        </section>
    )
};

export default Details;