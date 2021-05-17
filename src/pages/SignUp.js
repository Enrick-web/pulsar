import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner/Banner'
import { headerSignup } from '../Data/Data'
import './StyleFiles/signIn.css';


const SignUp = () => {
    
    const data = {
        firstname:'',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [loginData, setLoginData] = useState(data);

    const handleChange = (e) => {

    }

    const { firstname, lastname, email, password, confirmPassword} = loginData;

    return (
        <div>
            <Banner {...headerSignup}/>
            <div className="signin bgLight flex">
                <div className="form-box">
                    <form>
                        <div>
                            <label htmlFor="firstname">Prénom</label>
                            <input onChange={handleChange} id="firstname" type="text" placeholder="Jhon" required></input>
                        </div>
                        <div>
                            <label htmlFor="lastname">Nom</label>
                            <input id="lastname" type="text" placeholder="Doe" required></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="john@doe.com" required></input>
                        </div>
                        <div>
                            <label htmlFor="password">Mot de passe</label>
                            <input id="password" type="password" placeholder="Password" required></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirmez mot de passe</label>
                            <input id="confirmPassword" type="password" placeholder="Confirm Password" required></input>
                        </div>
                        <button type="button" className="btn">S'inscrire</button>
                    <Link to="/Signin"><p>Vous avez déja un compte? connectez-vous</p></Link>
                    </form>
                </div>
                <div className="box-txt">
                    <h3>Inscription</h3>
                    <p>Veuillez renseignez vos informations<br/> tel qu'ils figurent sur vos documents<br/> administratifs.</p>
                </div>
            </div>
        </div>
        
    )
}

export default SignUp
