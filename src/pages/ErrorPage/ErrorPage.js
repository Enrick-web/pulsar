import React from 'react'
import './errorPage.css';
import Images from '../../Images/Images';


function ErrorPage() {
    return (
        <div className="ErrorPage">
        <img src={Images.error404} alt="loupe"/>
            <h1>ERREUR 404</h1>
            <p>Oups! Cette page est introuvable...</p>
        </div>
    )
}

export default ErrorPage
