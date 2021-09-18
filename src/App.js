import React from "react";
import { BrowserRouter ,Route,Switch } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Team from "./Components/Team";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/team" component={Team}/>
        <Route path="/contact" component={Contact}/>   
      </Switch>

    </BrowserRouter>
  );
};

export default App;
