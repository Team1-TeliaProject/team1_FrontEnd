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

                <InputSelect text="User Type"
                options ={usertype} placeholder="Usertype" handleInputChange={(e) => {
                    sethide(e.target.value === 'employer');
                }}/>

                {(hide) ?<Input placeholder="Company Name"/>: ''}

                {(!hide) ?<Input placeholder="First Name"/>: ''}
                 
                {(!hide) ?<Input placeholder="Last Name"/>: ''}

                <Input placeholder="Email Address"/>

                <Input placeholder="Phone Number"/>

                <Input placeholder="Location"/>

                {(!hide) ?<InputSelect text="Type" options={type}  placeholder="Type"/>: ''}

                {(!hide) ?<InputSelect text="Level" options={level}  placeholder="Level"/>: ''}

                {(!hide) ?<Input placeholder="Title"/>: ''}

                {(!hide) ?<Input placeholder="GitHub"/>: ''}

                {(!hide) ?<Input placeholder="LinkedIn"/>: ''}

                {(!hide) ?<InputSelect text="Tech-Skills" options={skills} placeholder="Tech-Skills"/>: ''}
                
                {(!hide) ?<Textarea placeholder="About yourself" />: ''}

                <Input modifier="bg" placeholder="Upload Photo" />

                <Button text="Create" modifier="bg"/>
                
            </div>
            
        </div>
    )
}

export default ProfileRegistration;