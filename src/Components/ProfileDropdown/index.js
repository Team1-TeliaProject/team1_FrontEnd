import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';

import './profiledropdn.scss';

const ProfileDropdown = ({ handleEdit, handleExit }) => {
  return (
    <section className="dropdown">
      <div className="dropdown__item dropdown__item--top" onClick={handleEdit}>
        <FaUserAlt className="dropdown__icon" />
        <p className="dropdown__text">Profile</p>
      </div>

      <div className="dropdown__item" onClick={handleExit}>
        <IoLogOutOutline className="dropdown__icon" />
        <p className="dropdown__text">Log Out</p>
      </div>
    </section>
  );
};

export default ProfileDropdown;
