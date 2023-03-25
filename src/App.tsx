import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Forms from './components/Forms/Forms';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
