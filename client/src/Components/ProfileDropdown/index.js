import React, {useState} from 'react';
import EscapeOutside from 'react-escape-outside'
import { AiTwotoneEdit } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';

import './profiledropdn.scss';

const ProfileDropdown = ({ handleEdit, handleExit }) => {
  const [isOpen, setIsOpen]= useState(true);
  const handleEscapeOutside=()=> {
    setIsOpen(false )
  }

  return (
    <>
         <EscapeOutside onEscapeOutside={ handleEscapeOutside }>
      {isOpen ? (<section className="dropdown" >
        <div className="dropdown__edit" onClick={handleEdit}>
          <AiTwotoneEdit className="dropdown__icon" />
          <p className="dropdown__text">Profile</p>
        </div>

        <div className="dropdown__logout" onClick={handleExit}>
          <IoLogOutOutline className="dropdown__icon" />
          <p className="dropdown__text">Log Out</p>
       
        </div>
      </section>) : <> </>}
      </EscapeOutside>

    </>
  );
};

export default ProfileDropdown;
