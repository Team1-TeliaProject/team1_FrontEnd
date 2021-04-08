import React from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Textarea from '../../Components/Textarea'

import './ProfileRegistration.scss';


const ProfileRegistration = () => {
    return (
        <div className="profile-registration">

            <h3>create an account</h3>
            <div className="registration">
                <Input className="registration__must registration__select" placeholder="Usertype" />
                <Input className="registration__must" placeholder="First Name"/>
                <Input className="registration__must" placeholder="Last Name"/>
                <Input className="registration__must registration__select" placeholder="Email Address"/>
                <Input className="registration__must" placeholder="Phone Number"/>
                <Input className="registration__must" placeholder="Location"/>
                <Input className="registration__select" placeholder="Type"/>
                <Input className="registration__select" placeholder="Level"/>
                <Input className="registration__select" placeholder="Title"/>
                <Input placeholder="GitHub"/>
                <Input placeholder="LinkedIn"/>
                <Input className="registration__select" placeholder="Tech-Skills"/>
                
                <Textarea placeholder="About yourself" />

                <Button className="registration__select" text="Upload Photo" modifier=""/>

                <Button text="Create" modifier=""/>
                
            </div>
            
        </div>
    )
}

export default ProfileRegistration;