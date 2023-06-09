import './Main.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import SearchResultsSection from './SearchSection/SearchResultsSection/SearchResultsSection.js';
import SearchSection from './SearchSection/SearchSection.js';
import Details from './Details/Details.js';
import Booking from './Booking/Booking.js';
import MyProfileDoctor from './MyProfileDoctor/MyProfileDoctor.js';
import Home from './Home/Home.js';
import Doctors from '../Doctors/Doctors.js';
import MyProfilePatient from './MyProfilePatient/MyProfilePatient.js';
import DoctorEdit from './Edit/DoctorEdit.js';
import UserEdit from './Edit/UserEdit.js';
import EventEdit from './Edit/EventEdit.js';
import Logout from './Logout/Logout.js';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext.js';

const Main = () => {
    const { profile } = useContext(AuthContext);
    return (
        <main>
            {!profile.isDoctor && <SearchSection />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResultsSection />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/profile-doctor" element={<MyProfileDoctor />} />
                <Route path="/profile-doctor/edit/:id" element={<DoctorEdit />} />
                <Route path="/profile-patient" element={<MyProfilePatient />} />
                <Route path="/profile-patient/edit/:id" element={<UserEdit />} />
                <Route path="/details/:id" element={<Details />} /> {/* TO DO.. change path to /doctors/:id */}
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/booking/:id" element={<Booking />} />
                <Route path="/booking/:id/edit" element={<EventEdit />} />
            </Routes>
        </main>
    );
}

export default Main;
