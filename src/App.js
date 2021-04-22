import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Abilities from './components/Abilities';
import Hokage from './components/Hokage';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <nav id="nav-wrap">
                      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                      <ul id="nav" className="nav">
                          {/* <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                      <li><a className="smoothscroll" href="#about">About</a></li>
                      <li><a className="smoothscroll" href="#abilities">Abilities</a></li>
                      <li><a className="smoothscroll" href="#hokage">Hokage</a></li> */}
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/abilities">Abilities</Link></li>
                          <li><Link to="/hokage">Hokage</Link></li>
                      </ul>
                  </nav>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/about" component={About} />
            <Route path="/abilities" component={Abilities} />
            <Route path="/hokage" component={Hokage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;