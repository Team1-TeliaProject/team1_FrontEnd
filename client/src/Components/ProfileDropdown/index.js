import React from 'react';

import { AiTwotoneEdit } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';

import './profiledropdn.scss';

const ProfileDropdown = ({ handleEdit, handleExit }) => {
  return (
    <>
      <section className="profDropDn">
        <div className="profDropDn__edit" onClick={handleEdit}>
          <AiTwotoneEdit style={{ height: '4em', width: '2em', paddingLeft: '1rem' }} />
          <p className="profDropDn__edit profDropDn__edit__text">Profile</p>
        </div>

        <div className="profDropDn__logout" onClick={handleExit}>
          <IoLogOutOutline style={{ height: '4em', width: '2em', paddingLeft: '1rem' }} />
          <p className="profDropDn__logout profDropDn__logout__text">LogOut</p>
        </div>
      </section>
    </>
  );
};

export default ProfileDropdown;
