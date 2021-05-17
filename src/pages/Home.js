import React from 'react'
import { clients, headerHome, invoice, urssaf } from '../Data/Data';
import HeroSection from '../components/HeroSection/HeroSection';
import GridPrices from '../components/GridPrices/GridPrices';
import Testimonials from '../components/Testimonials/Testimonials';

function Home() {
    return (
        <div>
            <HeroSection {...headerHome} />
            <HeroSection {...invoice} />
            <HeroSection {...clients} />
            <HeroSection {...urssaf} />
            <GridPrices />
            <Testimonials />
        </div>
    )
}

export default Home
