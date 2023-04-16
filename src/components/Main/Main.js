import { Route, Routes } from 'react-router-dom';
import DoctorsPreviewSection from './DoctorsPreviewSection/DoctorsPreviewSection.js';
import Login from './Login/Login.js';
import './Main.css';
import Register from './Register/Register.js';
import SearchResultsSection from './SearchResultsSection/SearchResultsSection.js';
import SearchSection from './SearchSection/SearchSection.js';

const Main = () => {


    return (
        <main>
            <SearchSection />
            <Routes>
                <Route path="/" element={<DoctorsPreviewSection />} />
                <Route path="/search" element={<SearchResultsSection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </main>
    );
}

export default Main;
