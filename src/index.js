import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ServicesPage from './pages/ServicesPage';
import InsurancePage from './pages/InsurancePage';
import ContactPage from './pages/ContactPage';
import MakePaymentPage from './pages/MakePaymentPage';
import GalleryPage from './pages/GalleryPage';
import NoPage from './pages/404Page';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/services' element={<ServicesPage/>} />
        <Route exact path='/insurance' element={<InsurancePage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/makepayment' element={<MakePaymentPage />} />
        <Route exact path='/gallery' element={<GalleryPage />} />
        <Route exact path='/*' element={<NoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

