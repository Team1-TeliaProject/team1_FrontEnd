import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import Input from '../../Components/Input';
import InputSelect from '../../Components/InputSelect';
import Textarea from '../../Components/Textarea';
import Button from '../../Components/Button';
import { useForm } from '../../hooks/useForm';
import ImageUpload from '../../Components/ImageUpload';
import { typeOptions, techOptions } from '../../Utils/selectOptions';
import { talentProfile as profile, companyProfile as company } from '../../Utils/dummyData';

import './ProfileEditPage.scss';

const ProfileEditPage = ({ match, type = 'talent' }) => {
  const history = useHistory();
  const id = match.params.id;
  const [level, setLevel] = useState('');
  const [photo, setPhoto] = useState(profile.photo);
  const [logo, setLogo] = useState(company.logo);
  const [typeList, setTypeList] = useState([]);
  const [techList, setTechList] = useState([]);
  const [fields, setFields] = useForm({
    firstName: profile.firstName,
    lastName: profile.lastName,
    companyName: company.companyName,
    email: profile.email,
    cemail: company.email,
    phone: profile.phone,
    location: profile.location,
    clocation: company.location,
    title: profile.title,
    github: profile.github,
    linkedin: profile.linkedin,
    website: company.website,
    tabout: profile.about,
    cabout: company.about
  });

  const {
    firstName,
    lastName,
    companyName,
    email,
    cemail,
    phone,
    location,
    clocation,
    title,
    github,
    linkedin,
    website,
    tabout,
    cabout
  } = fields;

  const defaultTechs = profile.techs.map((item) => {
    return { value: item, label: item };
  });

  console.log('check', typeList, techList);

  const createAccount = (e) => {
    e.preventDefault();
    console.log('created!!');
  };

  const selectStyles = {
    control: (styles) => ({ ...styles, minHeight: '48px', marginBottom: '10px', marginTop: '10px' })
  };

  const handleChangeType = (options) => {
    const types = options.map((opt) => opt.value);
    setTypeList(types);
  };

  const handleChangeTech = (options) => {
    const techs = options.map((opt) => opt.value);
    setTechList(techs);
  };

  return (
    <div className="profile-edit">
      <h3 className="profile-edit__heading">UPDATE YOUR PROFILE</h3>
      {type === 'talent' && (
        <form className="profile-edit__form">
          <p className="profile-edit__label">First Name</p>
          <Input
            type="text"
            placeholder="First Name"
            id="firstName"
            value={firstName}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Last Name</p>
          <Input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={lastName}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Email Address</p>
          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Phone Number</p>
          <Input
            type="phone"
            placeholder="Phone Number"
            id="phone"
            value={phone}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Location</p>
          <Input
            type="text"
            placeholder="City, Country you live-in"
            id="location"
            value={location}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Professional Ttile</p>
          <Input
            type="text"
            placeholder="Title, e.g, Full-Stack developer"
            id="title"
            value={title}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">GitHub Link</p>
          <Input
            type="text"
            placeholder="Your GitHub link"
            id="github"
            value={github}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">LinedIn Link</p>
          <Input
            type="text"
            placeholder="Your LinkedIn link"
            id="linkedin"
            value={linkedin}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Profile Description</p>
          <Textarea
            maxLength={300}
            placeholder="Describe yourself. Max.300 characters"
            id="about"
            value={tabout}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Seniority Level</p>
          <InputSelect
            handleInputChange={(e) => setLevel(e.target.value)}
            placeholder="Select seniority"
            options={['Junior', 'Mid-Senior', 'Senior', 'Internship']}
          />
          <p className="profile-edit__label">Job Type</p>
          <Select
            placeholder="select job-type"
            onChange={handleChangeType}
            styles={selectStyles}
            isMulti
            name="type"
            options={typeOptions}
          />
          <p className="profile-edit__label">Tech Stack</p>
          <Select
            defaultValue={defaultTechs}
            placeholder="select techs"
            onChange={handleChangeTech}
            styles={selectStyles}
            isMulti
            name="tech"
            options={techOptions}
          />
          <div className="profile-edit__image-div">
            <img className="profile-edit__image" src={photo} alt="profile" />
            <ImageUpload setImage={setPhoto} />
          </div>

          <div className="profile-edit__btn-div">
            <Button modifier="dark" text="Update" handleClick={createAccount} />
          </div>
        </form>
      )}
      {type === 'company' && (
        <form className="profile-edit__form">
          <p className="profile-edit__label">Company Name</p>
          <Input
            type="text"
            placeholder="Company Name"
            id="companyName"
            value={companyName}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Email Address</p>
          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            value={cemail}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Company Location</p>
          <Input
            type="text"
            placeholder="City, Country you are located"
            id="location"
            value={clocation}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">Website</p>
          <Input
            type="text"
            placeholder="Company website"
            id="website"
            value={website}
            handleInputChange={setFields}
          />
          <p className="profile-edit__label">About Company</p>
          <Textarea
            maxLength={300}
            placeholder="Company info Max.300 characters"
            id="about"
            value={cabout}
            handleInputChange={setFields}
          />
          <div className="profile-edit__image-div">
            <img className="profile-edit__image" src={logo} alt="profile" />
            <ImageUpload setImage={setLogo} />
          </div>
          <div className="profile-edit__btn-div">
            <Button modifier="dark" text="Update" handleClick={createAccount} />
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileEditPage;
