import app from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBrAzHtagLHY3fcLLXlpkhc6veLLR4cBk8",
    authDomain: "pulsar-7b245.firebaseapp.com",
    projectId: "pulsar-7b245",
    storageBucket: "pulsar-7b245.appspot.com",
    messagingSenderId: "635319923324",
    appId: "1:635319923324:web:508dfb56069f2d76210ff9",
    measurementId: "G-13B430CMVC"
  };

  class Firebase {
      constructor() {
          app.initializeApp(config);
          this.auth = app.auth();
      }
      //Inscription
        signUpUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
      //Connexion
        loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
      //Deconnexion
      signOut = () => this.auth.signOut()
  }
  export default Firebase;