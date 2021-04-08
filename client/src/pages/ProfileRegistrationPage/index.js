import React, {useState} from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Textarea from '../../Components/Textarea'
import InputSelect from '../../Components/InputSelect'

import './ProfileRegistration.scss';


const ProfileRegistration = () => {
    const [hide, sethide] = useState(false);

    const usertype = ['Employee', 'Employer'];
    const type = ['Full-time', 'Part-time'];
    const level = ['Junior', 'Mid-Senior', 'Senior', 'Internship'];
    const skills = ['Javascript', 'PHP', 'Java', 'NodeJS', 'Express', 'EJS'];

    return (
        <div className="profile-registration">

            <h3>create an account</h3>
            <div className="registration">
                <InputSelect 
                options ={usertype} className="registration__must registration__select" placeholder="Usertype" handleInputChange={(e) => {
                    sethide(e.target.value === 'employer');
                }}/>
                <Input className="registration__must" placeholder="First Name"/>
                {(!hide) ?                 <Input className="registration__must" placeholder="Last Name"/>: ''}
                <Input className="registration__must registration__select" placeholder="Email Address"/>

                <Input className="registration__must" placeholder="Phone Number"/>

                <Input className="registration__must" placeholder="Location"/>

                <InputSelect options={type} className="registration__select" placeholder="Type"/>

                <InputSelect options={level} className="registration__select" placeholder="Level"/>
                {(!hide) ?<Input className="registration__select" placeholder="Title"/>: ''}
                {(!hide) ?<Input placeholder="GitHub"/>: ''}
                {(!hide) ?<Input placeholder="LinkedIn"/>: ''}
                {(!hide) ?<InputSelect options={skills}  className="registration__select" placeholder="Tech-Skills"/>: ''}
                
                {(!hide) ?<Textarea placeholder="About yourself" />: ''}

                {(!hide) ?<Button className="registration__select" text="Upload Photo" modifier=""/>: ''}

                <Button text="Create" modifier=""/>
                
            </div>
            
        </div>
    )
}

export default ProfileRegistration;