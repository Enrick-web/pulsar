import React from 'react';
import './banner.css';

function Banner({bgColor, header_title, header_desc}) {
    return (
        <div className={`banner ${bgColor ? 'bgLight' : 'bgDark'}`}>
            <h2 className={`${bgColor ? 'borderDark' : ''}`}>{header_title}</h2>
            <p>{header_desc}</p>
        </div>
    )
}

export default Banner
