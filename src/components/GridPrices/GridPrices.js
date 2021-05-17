import React from 'react';
import './GridPrices.css';
import { formulOne, formulTwo, formulThree } from '../../Data/Data';
import CardPrice from '../CardPrice/CardPrice';


function GridPrices() {
    return (
        <div>
            <div className="prices container grid">
                <CardPrice {...formulOne}/>
                <CardPrice {...formulTwo}/>
                <CardPrice {...formulThree}/>
            </div>
        </div>
    )
}

export default GridPrices
