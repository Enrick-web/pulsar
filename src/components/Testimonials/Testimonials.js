import React from 'react';
import './Testimonials.css';

function Testimonials() {
    return (
        <div className="testimonial bgDark">
        <h2>Avis clients</h2>
            <div className="box-avis">
            <div className="avis bgLight">
                <blockquote>
                    <p>Pulsar m'a aider à mieux gérer mon business.</p>
                </blockquote>
                <cite>Enrick G, Développeur web</cite>
            </div>
            <div className="avis bgLight">
                <blockquote>
                    <p>Un outils FORMIDABLE que je recommande.</p>
                </blockquote>
                <cite>Stephan D, Informaticien</cite>
            </div>
            <div className="avis bgLight">
                <blockquote>
                    <p>Grâce à Pulsar je me concentre sur l'essentiel, mon travail !</p>
                </blockquote>
                <cite>Sandrine A, Diétheticienne</cite>
            </div>
            <div className="avis bgLight">
                <blockquote>
                    <p>Simple d'utilisation et efficace.</p>
                </blockquote>
                <cite>Mathéo B, Développeur web</cite>
            </div>
            <div className="avis bgLight">
                <blockquote>
                    <p>Je gère mon statut de freelance avec Pulsar depuis bientôt 10 mois et je ne suis pas déçue.</p>
                </blockquote>
                <cite>Kelly V, Infographiste</cite>
            </div>
            <div className="avis bgLight">
                <blockquote>
                    <p>Je devais utiliser plusieurs plateformes pour gerer mon entreprise, Pulsar à tout réunis en une seule application.</p>
                </blockquote>
                <cite>Natacha P, Coiffeuse</cite>
            </div>
            <div className="avis bgLight">
                <blockquote>
                    <p>Merci à Pulsar pour le gain de temps et la simplicité de service.</p>
                </blockquote>
                <cite>Mitch J, Artisant métalier</cite>
            </div>
            </div>
        </div>
    )
}

export default Testimonials
