import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import Input from '../../Components/Input';
import InputSelect from '../../Components/InputSelect';
import Textarea from '../../Components/Textarea';
import Button from '../../Components/Button';
import { useForm } from '../../hooks/useForm';
import { useUser } from '../../hooks/useUser';
import ImageUpload from '../../Components/ImageUpload';
import { typeOptions, techOptions } from '../../Utils/selectOptions';
import { updateCompany, updateTalent } from '../../services/userService';
import profilePhoto from '../../Assets/proifle.jpeg';

import './ProfileEditPage.scss';

const ProfileEditPage = ({ match }) => {
  const history = useHistory();
  const id = match.params.id;
  const type = match.params.type;
  const [error, setError] = useState('');
  const [user] = useUser(id, type);
  const [level, setLevel] = useState('');
  const [photo, setPhoto] = useState(user && user.photo ? user.photo : profilePhoto);
  const [logo, setLogo] = useState(user && user.logo ? user.logo : profilePhoto);
  const [typeList, setTypeList] = useState([]);
  const [techList, setTechList] = useState([]);
  const [fields, setFields] = useForm({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
    github: '',
    linkedin: '',
    website: '',
    about: ''
  });

  const {
    firstName,
    lastName,
    companyName,
    email,
    phone,
    location,
    title,
    github,
    linkedin,
    website,
    about
  } = fields;

  const defaultTechs =
    user &&
    user.techs &&
    user.techs.map((item) => {
      return { value: item, label: item };
    });

  const updateProfile = (e) => {
    e.preventDefault();
    if (type === 'talent') {
      const updates = {
        firstName,
        lastName,
        email,
        phone,
        location,
        title,
        github,
        linkedin,
        about,
        level,
        type: typeList,
        techs: techList,
        photo
      };

      updateTalent(id, updates)
        .then((response) => {
          if (response.data.result) {
            history.push(`/employeeProfile/${id}`);
          }
        })
        .catch((error) => setError(error.response.data));
    } else {
      const updates = { name: companyName, email, location, website, about, logo, techs: techList };
      updateCompany(id, updates)
        .then((response) => {
          if (response.data.result) {
            history.push(`/companyProfile/${id}`);
          }
        })
        .catch((error) => setError(error.response.data));
    }
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
    user && (
      <div className="profile-edit">
        <h3 className="profile-edit__heading">UPDATE YOUR PROFILE</h3>
        {type === 'talent' && (
          <form className="profile-edit__form">
            <p className="profile-edit__label">First Name</p>
            <Input
              type="text"
              placeholder="First Name"
              id="firstName"
              defaultValue={user.firstName}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Last Name</p>
            <Input
              type="text"
              placeholder="Last Name"
              id="lastName"
              defaultValue={user.lastName}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Email Address</p>
            <Input
              type="email"
              placeholder="Email Address"
              id="email"
              defaultValue={user.email}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Phone Number</p>
            <Input
              type="phone"
              placeholder="Phone Number"
              id="phone"
              defaultValue={user.phone}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Location</p>
            <Input
              type="text"
              placeholder="City, Country you live-in"
              id="location"
              defaultValue={user.location}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Professional Ttile</p>
            <Input
              type="text"
              placeholder="Title, e.g, Full-Stack developer"
              id="title"
              defaultValue={user.title}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">GitHub Link</p>
            <Input
              type="text"
              placeholder="Your GitHub link"
              id="github"
              defaultValue={user.github}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">LinedIn Link</p>
            <Input
              type="text"
              placeholder="Your LinkedIn link"
              id="linkedin"
              defaultValue={user.linkedin}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Profile Description</p>
            <Textarea
              maxLength={300}
              placeholder="Describe yourself. Max.300 characters"
              id="about"
              defaultValue={user.about}
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
              <Button modifier="light" text="Update" handleClick={updateProfile} />
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
              defaultValue={user.name}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Email Address</p>
            <Input
              type="email"
              placeholder="Email Address"
              id="email"
              defaultValue={user.email}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Company Location</p>
            <Input
              type="text"
              placeholder="City, Country you are located"
              id="location"
              defaultValue={user.location}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">Website</p>
            <Input
              type="text"
              placeholder="Company website"
              id="website"
              defaultValue={user.website}
              handleInputChange={setFields}
            />
            <p className="profile-edit__label">About Company</p>
            <Textarea
              maxLength={300}
              placeholder="Company info Max.300 characters"
              id="about"
              defaultValue={user.about}
              handleInputChange={setFields}
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
              <img className="profile-edit__image" src={logo} alt="profile" />
              <ImageUpload setImage={setLogo} />
            </div>
            <div className="profile-edit__btn-div">
              <Button modifier="light" text="Update" handleClick={updateProfile} />
            </div>
          </form>
        )}
      </div>
    )
  );
};

export default ProfileEditPage;
