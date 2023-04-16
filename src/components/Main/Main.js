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
            <SearchResultsSection />
            <DoctorsPreviewSection />
            <Login />
            <Register />
        </main>
    );
}

export default Main;
