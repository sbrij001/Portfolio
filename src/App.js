import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';


class App extends React.Component{
  render(){

    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/about"
              render={()=> <About/>}/>
          <Route path="/projects"
              render={()=> <Projects/>}/>
          <Route path="/contact"
              render={()=> <Contact/>}/>
          <Route path="/"
              render={()=> <Banner/>}/>
        </Switch>
      </div>
    );
  }

}

export default App;
