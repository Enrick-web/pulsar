import React from 'react'
import { clients, headerHome, invoice, prices, urssaf } from '../Data/Data';
import HeroSection from '../components/HeroSection/HeroSection';

function Home() {
    return (
        <div>
            <HeroSection {...headerHome} />
            <HeroSection {...invoice} />
            <HeroSection {...clients} />
            <HeroSection {...urssaf} />
        </div>
    )
}

export default Home
