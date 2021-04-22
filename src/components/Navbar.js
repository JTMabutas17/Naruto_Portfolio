import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
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
                </React.Fragment>
            </Router>
        );
    }
}