import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
