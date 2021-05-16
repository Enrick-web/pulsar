import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/Home" exact><Home /></Route>
          <Route path="/Fonctionnalite">FONCTIONNALITES</Route>
          <Route path="/Prices">FORMULES</Route>
          <Route path="/Signin">CONNEXION</Route>
          <Route path="/"><ErrorPage /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
