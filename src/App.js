import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import Discussion from "./components/Discussion";
import Gallery from "./components/Gallery";
import Board from "./components/Board";
import Contact from "./components/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Board" component={Board} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Event" component={Event} />
          <Route path="/Discussion" component={Discussion} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
