import React from 'react';
import Awards from './Awards';
import Eduction from './Education';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Stats from './Stats';
import Footer from '../../Footer';
import OpenAccount from '../../OpenAccount';
import Hero from './Hero';

function HomePage() {
    return ( 
        <>
        
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Eduction />
        <OpenAccount />
        
        
        
        </>
     );
}

export default HomePage;
