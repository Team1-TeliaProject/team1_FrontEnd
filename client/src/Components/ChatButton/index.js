import React from 'react';
import './ChatButton.scss';

import {BsFillChatSquareDotsFill} from 'react-icons/all';


const ChatButton = ({ modifier, handleClick }) => {
  return (
      <button className={`chat-button button--${modifier}`} onClick={handleClick}>
          <BsFillChatSquareDotsFill size='100%'/>
      </button>
  );
};

export default ChatButton;
