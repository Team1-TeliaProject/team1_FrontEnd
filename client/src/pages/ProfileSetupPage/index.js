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

import './ProfileSetupPage.scss';

const ProfileSetupPage = ({ match }) => {
  const history = useHistory();
  const type = match.params.type;
  const [image, setImage] = useState(
    'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png'
  );
  const [seniority, setSeniority] = useState('');
  const [typeList, setTypeList] = useState([]);
  const [techList, setTechList] = useState([]);
  const [fields, setFields] = useForm({
    phone: '',
    location: '',
    title: '',
    github: '',
    linkedin: '',
    website: '',
    about: ''
  });

  const { phone, location, title, github, linkedin, about, website } = fields;

  const createAccount = (e) => {
    e.preventDefault();
    console.log('created!!');
  };

  const selectStyles = {
    control: (styles) => ({ ...styles, height: '48px', marginBottom: '10px', marginTop: '10px' })
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
    <div className="profile-setup">
      <h3 className="profile-setup__heading">SETUP YOUR PROFILE</h3>
      <p className="profile-setup__text profile-setup__text--msg">
        Hi! We are glad you are here! <br /> Please help us providing you a personalized user
        experience by filling up more information{' '}
      </p>
      {type === 'talent' && (
        <div className="profile-setup__content">
          <div className="profile-setup__data">
            <img className=" profile-setup__image" src={image} />
            <div className="profile-setup__info-div">
              <p className="profile-setup__text profile-setup__text--big">Chiranjibi Chapagain</p>
              <p className="profile-setup__text profile-setup__text--small">
                chiranjibichapagain@gmail.com
              </p>
              <p className="profile-setup__text">Upload new image to change profile picture</p>
              <div className="profile-setup__text">
                <ImageUpload setImage={setImage} />
              </div>
            </div>
          </div>
          <form className="profile-setup__form">
            <Input
              type="phone"
              placeholder="Phone Number"
              id="phone"
              value={phone}
              handleInputChange={setFields}
            />
            <Input
              type="text"
              placeholder="City, Country you live-in"
              id="location"
              value={location}
              handleInputChange={setFields}
            />

            <Input
              type="text"
              placeholder="Title, e.g, Full-Stack developer"
              id="title"
              value={title}
              handleInputChange={setFields}
            />
            <Input
              type="text"
              placeholder="Your GitHub link"
              id="github"
              value={github}
              handleInputChange={setFields}
            />

            <Input
              type="text"
              placeholder="Your LinkedIn link"
              id="linkedin"
              value={linkedin}
              handleInputChange={setFields}
            />
            <Textarea
              maxLength={300}
              placeholder="Describe yourself. Max.300 characters"
              id="about"
              value={about}
              handleInputChange={setFields}
            />
            <InputSelect
              handleInputChange={(e) => setSeniority(e.target.value)}
              placeholder="Select seniority"
              options={['Junior', 'Mid-Senior', 'Senior', 'Internship']}
            />

            <Select
              placeholder="select job-type"
              onChange={handleChangeType}
              styles={selectStyles}
              isMulti
              name="type"
              options={typeOptions}
            />
            <Select
              placeholder="select techs"
              onChange={handleChangeTech}
              styles={selectStyles}
              isMulti
              name="tech"
              options={techOptions}
            />

            <div className="profile-setup__btn-div">
              <Button modifier="dark" text="Update" handleClick={createAccount} />
            </div>
          </form>
        </div>
      )}
      {type === 'company' && (
        <div className="profile-setup__content">
          <div className="profile-setup__data">
            <img className=" profile-setup__image" src={image} />
            <div className="profile-setup__info-div">
              <p className="profile-setup__text profile-setup__text--big">
                Business College Helsinki
              </p>
              <p className="profile-setup__text profile-setup__text--small">
                info@businesscollege.com
              </p>
              <p className="profile-setup__text">Upload new image to change profile picture</p>
              <div className="profile-setup__text">
                <ImageUpload setImage={setImage} />
              </div>
            </div>
          </div>
          <form className="profile-setup__form">
            <Input
              type="text"
              placeholder="City, Country you are located"
              id="location"
              value={location}
              handleInputChange={setFields}
            />
            <Input
              type="text"
              placeholder="Company website"
              id="website"
              value={website}
              handleInputChange={setFields}
            />
            <Textarea
              maxLength={300}
              placeholder="Company info Max.300 characters"
              id="about"
              value={about}
              handleInputChange={setFields}
            />
            <div className="profile-setup__btn-div">
              <Button modifier="dark" text="Update" handleClick={createAccount} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileSetupPage;
