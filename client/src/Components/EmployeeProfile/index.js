import React from 'react';
import './EmployeeProfile.scss';
import { ReactComponent as Logo } from './logo.svg';
 
 
        const EmployeeProfile = () => {
            return (
                <div className="employee-profile">
                    <header>
                        <Logo />
                    <img className="profile__image__small" src="/image/employee.png"></img>

                    </header>
                    
                    <div>

                    </div>
                
                </div>
            );
        };
        
export default EmployeeProfile;