import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import FranPage from './pages/fran-page';
import { UserProvider } from './components/UserContext';  
import NatalyPage from './pages/nataly-page';
import AzaelPage from './pages/Azael-page';
import AdrianPage from './pages/adrian-page';
import GabrielPage from './pages/gabriel-page';
import VayholettPage from './pages/vayholett';


const App = () => {
  const [username, setUsername] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<Login setUsername={setUsername} />} />
        <Route path="/Home" element={<Home username={username} />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/fran-page" element={<FranPage />} /> 
        <Route path="*" element={<Login setUsername={setUsername} />} />
        <Route path="/nataly-page" element={<NatalyPage />} />
        <Route path="/azael-page" element={<AzaelPage/>} />
        <Route path="/adrian-page" element={<AdrianPage />} />
        <Route path="/gabriel-page" element={<GabrielPage />} />
        <Route path="/vayholett-page" element={<VayholettPage />} />
      </Routes>
    </>
  );
};

export default App;