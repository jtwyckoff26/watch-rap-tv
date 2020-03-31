import './App.css';
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Twitter from './components/Twitter';
import Youtube from './components/Youtube';
import Spotify from './components/Spotify';
import Instagram from './components/Instagram';
import Home from './components/Home';

    function App() {
        return (
            <HashRouter basename="/">
                <div>
                    <Route exact path="/" render={props => <Home {...props} />} /> 
                    <Route exact path="/twitter" render={props => <Twitter {...props} />} />
                    <Route exact path="/youtube" render={props => <Youtube {...props} />} />
                    <Route exact path="/spotify" render={props => <Spotify {...props} />} />
                    <Route exact path="/instagram" render={props => <Instagram {...props} />} />
                </div>
            </HashRouter>
        );
}

export default App;