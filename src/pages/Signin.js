import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner/Banner'
import { headerSignin } from '../Data/Data'
import './StyleFiles/signIn.css';

const Signin = () => {
    return (
        <div>
            <Banner {...headerSignin} />
            <div className="signin bgLight flex">
                <div className="box-txt">
                    <h3>Bénéficiez de dizaines d'avantages.</h3>
                    <p>Veuillez renseignez vos informations<br/> tel qu'ils figurent sur vos documents<br/> administratifs.</p>
                </div>
                <div className="form-box">
                    <form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="john@doe.com" required></input>
                        </div>
                        <div>
                            <label htmlFor="password">Mot de passe</label>
                            <input id="password" type="password" placeholder="Mot de passe" required></input>
                        </div>
                        <button type="button" className="btn">Connexion</button>
                    <Link to="/SignUp"><p className="mdr">Mot de passe oublié?</p></Link>
                    </form>
                    <br/>
                    <Link to="/SignUp"><p>Vous n'avez pas de compte? créez-en un !</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Signin
