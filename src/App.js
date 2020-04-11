import React from "react";
import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer'

const App = () => {
  return (
    <BrowserRouter>
        <NavbarComp />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          
        </Switch>
         <Footer />
    </BrowserRouter>

  );
};

export default App;
