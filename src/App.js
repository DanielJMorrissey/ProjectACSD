import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/Home';
import Videos from './components/Videos';
import Setlists from './components/Setlists';
import Contact from './components/Contact';

function App() {
//business logic JS goes here if needed...
  
//ciara test comment
//RETURN this JSX to UI [Everything below is wrapped in the Router so that the Navbar toggles between our different sections/views]
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>

          <Route exact path ="/">
            <Home />
          </Route>

          <Route path ="/videos">
            <Videos />
          </Route>

          <Route path ="/setlists">
            <Setlists />
          </Route>

          <Route path ="/contact">
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
