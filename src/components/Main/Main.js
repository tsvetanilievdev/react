import './Main.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import SearchResultsSection from './SearchResultsSection/SearchResultsSection.js';
import SearchSection from './SearchSection/SearchSection.js';
import Details from './Details/Details.js';
import Booking from './Booking/Booking.js';
import MyProfileDoctor from './MyProfileDoctor/MyProfileDoctor.js';
import Home from './Home/Home.js';
import Doctors from '../Doctors/Doctors.js';

const Main = () => {
    const isDoctor = false;
    return (
        <main>
            {!isDoctor && <SearchSection />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResultsSection />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/profile-doctor" element={<MyProfileDoctor />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </main>
    );
}

export default Main;
