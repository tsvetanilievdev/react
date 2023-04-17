import { Route, Routes } from 'react-router-dom';
import DoctorsPreviewSection from './DoctorsPreviewSection/DoctorsPreviewSection.js';
import Login from './Login/Login.js';
import './Main.css';
import Register from './Register/Register.js';
import SearchResultsSection from './SearchResultsSection/SearchResultsSection.js';
import SearchSection from './SearchSection/SearchSection.js';
import Details from './Details/Details.js';
import Booking from './Booking/Booking.js';

const Main = () => {

    return (
        <main>
            <SearchSection />
            <Routes>
                <Route path="/" element={<DoctorsPreviewSection />} />
                <Route path="/search" element={<SearchResultsSection />} />
                <Route path="/doctors" element={<DoctorsPreviewSection />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </main>
    );
}

export default Main;
