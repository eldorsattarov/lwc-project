import React from "react";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import DesignService from "./components/DesignService";
import TechnicalService from "./components/TechnicalService";
import About from "./components/About";
import Main from "./components/Main";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contact from "./components/Contact";
function App() {
  return (
      <BrowserRouter>
        <Navbar/>
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/about" exact component={About}/>
      <Route path="/design" exact component={DesignService}/>
      <Route path="/technical" exact component={TechnicalService}/>
      <Route path="/contact" exact component={Contact}/>
    </Switch>
      </BrowserRouter>
  );
}

export default App;
