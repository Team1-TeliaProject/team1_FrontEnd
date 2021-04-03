import React from 'react';
import './EmployeeProfile.scss';
import Header from '../Header/Header'
import Button from '../Button/index'
 
 
        const EmployeeProfile = () => {
            return (
                <div className="employee-profile">
                    <header>
                        <Header />
                        <img className="employee-profile__image__small" src="/image/user.png" />

                    </header>
                    
                    <div className="employee-profile__main">
                        <img className="employee-profile__image__big" src="/image/user.png" />
                        <div className="employee-profile__main__content">
                            <h2>Talent Name</h2>
                            <p>Location</p>

                            <h3>Title</h3>
                            <p>Junior, Full-time/Part-time</p>

                            <h3>About</h3>
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing       
                            </p>
                            <p>React, Javascript, Redux, MongoDB</p>
                            <div className="employee-profile__btn">
                       
                       <Button text="Edit Profile" modifier="md" />
                    </div>

                        </div>
                        
                    </div>
                   
                
                </div>
            );
        };
        
export default EmployeeProfile;