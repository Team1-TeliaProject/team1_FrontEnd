import React from 'react';
import './InfoButton.scss';
import {FaInfo} from 'react-icons/all';



const InfoButton = ({ modifier, handleClick }) => {
  return (
      <button className={`chat-button button--${modifier}`} onClick={handleClick}>
          <FaInfo size='100%'/>
      </button>
  );
};

export default InfoButton;
