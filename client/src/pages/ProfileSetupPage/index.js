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
import { editCompany, editTalent } from '../../services/userService';

const ProfileSetupPage = ({ match }) => {
  const history = useHistory();
  const type = match.params.type;
  const id = match.params.id;

  console.log('id--', id);

  const [photo, setPhoto] = useState(
    'https://www.clipartkey.com/mpngs/m/236-2364608_medal-clipart-lace-blue-leaf-round-logo.png'
  );
  const [logo, setLogo] = useState(
    'https://muropaketti.com/wp-content/uploads/2017/11/apple-logo-black.png'
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
    about: ''
  });

  const { phone, location, title, github, linkedin, about, website } = fields;

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
      photo
    };

    editTalent(updates, id)
      .then((response) => {
        if (response.data) {
          history.push('/home');
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const setUpCompany = (e) => {
    e.preventDefault();
    const updates = {
      location,
      about,
      website,
      logo
    };

    editCompany(updates, id)
      .then((response) => {
        if (response.data) {
          history.push('/home');
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="profile-setup">
      <h3 className="profile-setup__heading">SET UP YOUR PROFILE</h3>

      {type === 'talent' && (
        <div className="profile-setup__content">
          <div className="profile-setup__data">
            <img className=" profile-setup__image" src={photo} />
            <div className="profile-setup__info-div">
              <p className="profile-setup__text profile-setup__text--big">Chiranjibi Chapagain</p>
              <p className="profile-setup__text profile-setup__text--small">
                chiranjibichapagain@gmail.com
              </p>
              <p className="profile-setup__text">Update Profile Picture</p>
              <div className="profile-setup__text">
                <ImageUpload setImage={setPhoto} />
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
              <Button modifier="light" text="Update" handleClick={setUpTalent} />
            </div>
          </form>
        </div>
      )}
      {type === 'company' && (
        <div className="profile-setup__content">
          <div className="profile-setup__data">
            <img className=" profile-setup__image" src={logo} />
            <div className="profile-setup__info-div">
              <p className="profile-setup__text profile-setup__text--big">
                Business College Helsinki
              </p>
              <p className="profile-setup__text profile-setup__text--small">
                info@businesscollege.com
              </p>
              <p className="profile-setup__text">Update Profile Picture</p>
              <div className="profile-setup__upload">
                <ImageUpload setImage={setLogo} />
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
            <Textarea
              maxLength={300}
              placeholder="Company info Max.300 characters"
              id="about"
              value={about}
              handleInputChange={setFields}
              label="About Company"
            />
            <div className="profile-setup__btn-div">
              <Button modifier="light" text="Update" handleClick={setUpCompany} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileSetupPage;
