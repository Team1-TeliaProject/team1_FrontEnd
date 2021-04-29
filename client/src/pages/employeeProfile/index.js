import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../Components/Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import profilePic from '../../Assets/proifle.jpeg';

import './Profilepage.scss';
import { getOneTalent } from '../../services/userService';

const EmployeeProfile = ({ match }) => {
  const id = match.params.id;
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getOneTalent(id).then((response) => {
      if (response.data) {
        setUser(response.data);
      }
    });
  }, []);

  console.log('user--', user);

  return (
    user && (
      <div className="employee">
        <div className="employee__profile-div">
          <img
            className="employee__image"
            src={user.photo ? user.photo : profilePic}
            alt="profile picture"
          />
        </div>

        <div className="employee__content">
          <h2 className="employee__text">
            {user.firstName} {user.lastName}
          </h2>
          <div className="employee__contact">
            <p className="employee__text employee__text--email">Email: {user.email}</p>
            {user.phone && (
              <p className="employee__text employee__text--phone">Phone: {user.phone}</p>
            )}
          </div>

          {user.location && (
            <p className="employee__text employee__text--location"> {user.location}</p>
          )}

          {user.title && (
            <p className="employee__text employee__text--title">
              {user.title} | {user.level}{' '}
            </p>
          )}

          <div className="employee__type">
            {user.type &&
              user.type.map((item, index) => (
                <span key={index} className="employee__text employee__text--level">
                  {item} &nbsp;
                </span>
              ))}
          </div>

          {user.about && (
            <div>
              <p className="employee__text">About</p>
              <p className="employee__text employee__text--about">{user.about}</p>
            </div>
          )}

          {user.techs && (
            <p className="employee__techs">
              {user.techs.map((item, idx) => (
                <span key={idx}>{`${item}, `}</span>
              ))}
            </p>
          )}

          <div className="employee__icons">
            {user.github && <AiFillGithub className="employee__icon" />}
            {user.linkedin && <AiFillLinkedin className="employee__icon" />}
          </div>
          <div className="employee__btn-div">
            <Button
              handleClick={() => history.push(`/profile/edit/${user.id}/${user.userType}`)}
              text="Edit Profile"
              modifier="light"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default EmployeeProfile;
