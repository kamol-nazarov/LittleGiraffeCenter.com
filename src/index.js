import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home_Page/HomePage';
import ServicesPage from './pages/Services_Page/ServicesPage';
import InsurancePage from './pages/Insurance_Page/InsurancePage';
import ContactPage from './pages/Contact_Page/ContactPage';
import MakePaymentPage from './pages/Make_Payment_Page/MakePaymentPage';
import GalleryPage from './pages/Gallery_Page/GalleryPage';
import ClassesPage from './pages/Classes_Page/ClassesPage';
import NoPage from './pages/404Page';

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
        <Route exact path='/classes' element={<ClassesPage />} />
        <Route exact path='/*' element={<NoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

