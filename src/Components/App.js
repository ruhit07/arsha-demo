import React from "react";
import { BrowserRouter ,Route,Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Team from "./Team";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        {/* <Route path="/portfolio" component={Portfolio}/> */}
        <Route path="/team" component={Team}/>
        <Route path="/contact" component={Contact}/>   
      </Switch>

    </BrowserRouter>
  );
};

export default App;
