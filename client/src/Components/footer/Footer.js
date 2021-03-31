import React from 'react';
import { Link } from 'react-router-dom';



const Footer = ()=> {
    return (
        
            
                <div className="footer">
                   <nav>
                       
                                <Link to="/about">About Us</Link>
                       
                                <Link to="/privacy">Privacy Policy</Link>
                   </nav>
                 
                           
                </div>    
            
            
       
    )
}

export default Footer;
