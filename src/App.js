import './App.css';

import Footer from './Components/Footer/Footer.js';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';

import { AuthProvider } from './context/AuthContext.js';

function App() {

  return (
    <AuthProvider>
      <Header />
      <Main />
      <Footer />
    </AuthProvider>
  );
}

export default App;

