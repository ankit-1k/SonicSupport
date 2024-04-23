import React from 'react';
import Landingpage from './components/Landingpage/Landingpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import News from './components/News/News';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/news" element={<News />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;