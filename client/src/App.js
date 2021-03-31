import React from 'react';
import './scss/app.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './Components/footer/About';
import Home from './Components/Home';
import Privacy from './Components/footer/Privacy';



function App() {
  return (
    <div className="app">
      <div className="app__main">
      <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                
                
                    <Route path="/privacy">
                        <Privacy />
                    </Route>
                </Switch>
                
            </Router>
      </div>
      
   
    </div>
  );
}

export default App;
