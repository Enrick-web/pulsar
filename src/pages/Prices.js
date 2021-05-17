import React from 'react';
import Banner from '../components/Banner/Banner';
import GridPrices from '../components/GridPrices/GridPrices';
import { headerFormul } from '../Data/Data';


function Prices() {
    return (
        <div>
            <Banner {...headerFormul} />
            <GridPrices />
        </div>
    )
}

export default Prices
