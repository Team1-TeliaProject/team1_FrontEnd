import React from 'react';
import './ChatButton.scss';


const ChatButton = ({ modifier, handleClick }) => {
  return (
      <button className={`chat-button button--${modifier}`} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
               className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
              <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
      </button>
  );
};

export default ChatButton;