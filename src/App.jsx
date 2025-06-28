import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import { UserProvider } from './components/UserContext';  


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
        <Route path="*" element={<Login setUsername={setUsername} />} />
      </Routes>
    </>
  );
};

export default App;
