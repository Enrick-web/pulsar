import React from 'react';
import './HeroSection.css';

function HeroSection({title, title2, slogan, img, btn, btn_label, bgColor, description, reverse, img_alt}) {
    return (
        <>
            <div className={`${bgColor ? 'hero bgLight' : 'hero bgDark'} ${reverse ? '' : 'flex-row_reverse'}`}>
                <div className="txt-bloc"> 
                    <h1>{title}</h1>
                    <h2>{title2}</h2>
                    <p>{slogan}</p>
                    <p>{description}</p>
                    <div className={`${btn ? 'btn' : 'none' }`}>{btn_label}</div>
                </div>
            <img className="home-img" src={img} alt={img_alt}/>
            </div>
        </>
    )
}

export default HeroSection
