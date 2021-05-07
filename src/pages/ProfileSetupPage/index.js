import React, { useState, useEffect } from 'react';
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
import {
  editCompany,
  editTalent,
  getOneCompany,
  getOneTalent,
} from '../../services/userService';

const ProfileSetupPage = ({ match }) => {
  const history = useHistory();
  const [error, setError] = useState('');
  const type = match.params.type;
  const id = match.params.id;
  const [user, setUser] = useState('');

  useEffect(() => {
    if (type === 'talent') {
      getOneTalent(id).then((response) => {
        if (response.data) {
          setUser(response.data);
        }
      });
    } else {
      getOneCompany(id).then((response) => {
        if (response.data) {
          setUser(response.data);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [photo, setPhoto] = useState(
    'https://www.restova.co.tz/sites/default/files/pictures/default.jpg'
  );
  const [logo, setLogo] = useState(
    'https://www.iammadein.com/sites/iammadein.com/files/default_images/default-logo.png'
  );
  const [level, setLevel] = useState('');
  const [typeList, setTypeList] = useState([]);
  const [techList, setTechList] = useState([]);
  const [fields, setFields] = useForm({
    phone: '',
    location: '',
    title: '',
    github: '',
    linkedin: '',
    website: '',
    about: '',
  });

  const { phone, location, title, github, linkedin, about, website } = fields;

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      minheight: '48px',
      marginBottom: '10px',
      marginTop: '10px',
    }),
  };

  const handleChangeType = (options) => {
    const types = options.map((opt) => opt.value);
    setTypeList(types);
  };

  const handleChangeTech = (options) => {
    const techs = options.map((opt) => opt.value);
    setTechList(techs);
  };

  const setUpTalent = (e) => {
    e.preventDefault();
    const updates = {
      phone,
      location,
      title,
      github,
      linkedin,
      about,
      level,
      type: typeList,
      techs: techList,
      photo,
    };

    editTalent(updates, id)
      .then((response) => {
        if (response.data) {
          history.push('/');
        }
      })
      .catch((error) => {
        console.log(error.response.data.Error);
      });
  };

  const setUpCompany = (e) => {
    e.preventDefault();
    const updates = {
      location,
      about,
      website,
      techs: techList,
      logo,
    };

    editCompany(updates, id)
      .then((response) => {
        if (response.data) {
          history.push('/');
        }
      })
      .catch((error) => {
        setError(error.response.data.Error);
      });
  };

  return (
    <div className="profile-setup">
      <h3 className="profile-setup__heading">SET UP YOUR PROFILE</h3>

      {type === 'talent' && (
        <div className="profile-setup__content">
          <div className="profile-setup__data">
            <img alt="profile" className=" profile-setup__image" src={photo} />
            <div className="profile-setup__info-div">
              <p className="profile-setup__text profile-setup__text--big">
                {user && user.firstName} {user && user.lastName}
              </p>
              <p className="profile-setup__text profile-setup__text--small">
                {user && user.email}
              </p>
              <p className="profile-setup__text">Update Profile Picture</p>
              <div className="profile-setup__text">
                <ImageUpload setImage={setPhoto} />
              </div>
            </div>
          </div>
          <form className="profile-setup__form">
            <p
              className={
                error ? 'profile-setup__error ' : 'profile-setup__error--hidden'
              }
            >
              {error}
            </p>
            <Input
              type="phone"
              placeholder="Phone Number"
              id="phone"
              value={phone}
              handleInputChange={setFields}
              label="Phone"
            />
            <Input
              type="text"
              placeholder="City, Country you live-in"
              id="location"
              value={location}
              handleInputChange={setFields}
              label="Location"
            />
            <Input
              type="text"
              placeholder="Title, e.g, Full-Stack developer"
              id="title"
              value={title}
              handleInputChange={setFields}
              label="Title"
            />
            <Input
              type="text"
              placeholder="Your GitHub link"
              id="github"
              value={github}
              handleInputChange={setFields}
              label="Github Link"
            />
            <Input
              type="text"
              placeholder="Your LinkedIn link"
              id="linkedin"
              value={linkedin}
              handleInputChange={setFields}
              label="LinkedIn Link"
            />
            <Textarea
              maxLength={300}
              placeholder="Describe yourself. Max.300 characters"
              id="about"
              value={about}
              handleInputChange={setFields}
              label="About"
            />
            <InputSelect
              handleInputChange={(e) => setLevel(e.target.value)}
              placeholder="Select seniority"
              options={['Junior', 'Mid-Senior', 'Senior', 'Internship']}
              id={id}
              label={'Level'}
            />
            <p className="profile-setup__label">Job-type</p>
            <Select
              placeholder="select job-type"
              onChange={handleChangeType}
              styles={selectStyles}
              isMulti
              name="type"
              options={typeOptions}
            />
            <p className="profile-setup__label">Techs</p>
            <Select
              placeholder="select techs"
              onChange={handleChangeTech}
              styles={selectStyles}
              isMulti
              name="tech"
              options={techOptions}
            />

            <div className="profile-setup__btn-div">
              <Button
                modifier="light"
                text="Update"
                handleClick={setUpTalent}
              />
            </div>
          </form>
        </div>
      )}
      {type === 'company' && (
        <div className="profile-setup__content">
          <div className="profile-setup__data">
            {logo ? (
              <img alt="logo" className=" profile-setup__image" src={logo} />
            ) : (
              <span>loading...</span>
            )}
            <div className="profile-setup__info-div">
              <p className="profile-setup__text profile-setup__text--big">
                {user && user.name}
              </p>
              <p className="profile-setup__text profile-setup__text--small">
                {user && user.email}
              </p>
              <p className="profile-setup__text">Update Profile Picture</p>
              <div className="profile-setup__upload">
                <ImageUpload setImage={setLogo} />
              </div>
            </div>
          </div>
          <form className="profile-setup__form">
            <p
              className={
                error ? 'profile-setup__error ' : 'profile-setup__error--hidden'
              }
            >
              {error}
            </p>
            <Input
              type="text"
              placeholder="City, Country you are located"
              id="location"
              value={location}
              handleInputChange={setFields}
              label="Location"
            />
            <Input
              type="text"
              placeholder="Company website"
              id="website"
              value={website}
              handleInputChange={setFields}
              label="Company Website"
            />
            <p className="profile-setup__label">Techs</p>
            <Select
              placeholder="select techs"
              onChange={handleChangeTech}
              styles={selectStyles}
              isMulti
              name="tech"
              options={techOptions}
            />

            <Textarea
              maxLength={300}
              placeholder="Company info Max.300 characters"
              id="about"
              value={about}
              handleInputChange={setFields}
              label="About Company"
            />
            <div className="profile-setup__btn-div">
              <Button
                modifier="light"
                text="Update"
                handleClick={setUpCompany}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileSetupPage;
