import React from 'react';
import './cardprice.css';

function CardPrice({formulName, formulDesc, price, scale, bgDark}) {
    return (
        <div>
            <div className={`card-formul ${scale ? 'formule-scale' : ''} ${bgDark ? 'bgDark' : 'bgLight'}`}>
                <h2>{formulName}</h2>
                <p>{formulDesc}</p>
                <ul>
                    <li>Dashbord instantané</li>
                    <li>Devis & factures</li>
                    <li>Gestion des clients</li>
                    <li>Suivie du temps de travail</li>
                    <li>Livre des recettes & registre des achats</li>
                    <li>Suivie de la TVA</li>
                    <li>Déclaration & paiement des cotisations</li>
                    <li>+ Encore plus de services et avantages...</li>
                </ul>
                <h3>{price} €</h3>
            </div>
        </div>
    )
}

export default CardPrice
