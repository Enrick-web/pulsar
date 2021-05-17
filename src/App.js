import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Fonctionnalites from './pages/Fonctionnalites';
import Prices from './pages/Prices';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/Home" exact><Home /></Route>
          <Route path="/Fonctionnalite"><Fonctionnalites /></Route>
          <Route path="/Prices"><Prices /></Route>
          <Route path="/Signin"><Signin /></Route>
          <Route path="/SignUp"><SignUp /></Route>
          <Route path="/"><ErrorPage /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
