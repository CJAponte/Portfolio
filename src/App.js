import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';

import SideNav from "./components/navigation/SideNav";

import Home from "./components/home/Home"
import Resume from "./components/resume/Resume"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"



const App = props => {
  
  return (
    <Router>
      <div className="App">
        <Route path="/" component={SideNav} />
        <Route exact path="/" component={Home}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        
        
      
      </div>
    </Router>
  );
}

export default App;
