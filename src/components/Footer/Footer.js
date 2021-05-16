import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="flex bgDark">
            <div className="container flex flex-column">
                <h3>PULSAR</h3>
                <p>Pulsar © 2021<br />Tous droits réservés.</p>
            </div>
            <div className="container flex flex-column">
                <h3>Liens rapides</h3>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Nos formules</li>
                    <li>Partenaires</li>
                    <li>Periode d'essai</li>
                    <li>Promotions</li>
                </ul>
            </div>
            <div className="container flex flex-column">
                <h3>Services</h3>
                <ul>
                    <li>Dashbord</li>
                    <li>Livre des recettes et registre d'achat </li>
                    <li>Synchronisation de compte bancaire</li>
                    <li>Devis & factures</li>
                    <li>Gestion des taches et des projets</li>
                    <li>Déclaration des cotisations</li>
                </ul>
            </div>
            <div className="container flex flex-column">
                <h3>Pulsar Ltd</h3>
                <ul>
                    <li>A propos</li>
                    <li>Notre équipe</li>
                    <li>Nous rejoindre</li>
                    <li>FAQs</li>
                    <li>Service client</li>
                    <li>Contactez-nous</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
