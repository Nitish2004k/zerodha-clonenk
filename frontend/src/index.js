import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';
import About from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPagea from './landing_page/pricing/PricingPagea';
import SupportPagea from './landing_page/support/SupportPagea'
import Navbar from './landing_page/home/Navbar';
import Footer from './Footer';
import NotFound from './landing_page/NotFounda';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/products' element={<ProductsPage/>}></Route>
    <Route path='/pricing' element={<PricingPagea/>}></Route>
    <Route path='/support' element={<SupportPagea/>}></Route>
     <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>
 
);
