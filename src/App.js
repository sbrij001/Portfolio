import React from 'react';
import { Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar.component';
import Banner from './components/Banner.component';
import About from './components/About.component';
import Projects from './components/Projects.component';
import Contact from './components/Contact.component';
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
