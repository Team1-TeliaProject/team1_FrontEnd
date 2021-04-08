import React from 'react';
import './EmployeeProfile.scss';
import Button from '../Button/index'
 
 
        const EmployeeProfile = ({alt, modifier, name, location, title, position, about, description, skills}) => {
            return (
                <div className="employee">
                    
                    
                    <div className="employee__main">
                        <img className={`employee__image employee__image--big ${modifier}`} alt={alt} src="/image/employee-profile-image.jpg" />

                        <div className="employee__content">

                            <h2>{name}</h2>
                            <p>{location}</p>

                            <h3>{title}</h3>
                            <p>{position}</p>

                            <h3>{about}</h3>
                            <p>{description}</p>
                            <p>{skills}</p>

                            <div className="employee__btn-div">
                                <Button text="Edit Profile" modifier="md" />
                            </div>

                        </div>
                        
                    </div>
                   
                
                </div>
            );
        };
        
export default EmployeeProfile;