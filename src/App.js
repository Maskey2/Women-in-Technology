import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import Donate from './components/Donate'
import Discussion from './components/Discussion'
import Gallary from './components/Gallary'
import Board from './components/Board'
import Contact from './components/Contact'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
              <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/About" component={About}/>
                  <Route path="/Contact" component={Contact}/>
                  <Route path="/Board" component={Board}/>
                  <Route path="/Gallary" component={Gallary}/>
                  <Route path="/Donate" component={Donate}/>
                  <Route path="/Discussion" component={Discussion}/>
                  <Route component={Error}/>
              </Switch>
          </BrowserRouter>
    );
  }
}
export default App;
