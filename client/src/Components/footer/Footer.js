import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './About';
import Privacy from './Privacy';

const Footer = ()=> {
    return (
        
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
            
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/privacy">
                            <Privacy />
                        </Route>
                    </Switch>
                </div>    
            </Router>
            
       
    )
}

export default Footer;
