import React from 'react';

import './Chat.scss';
const Chat = ({ chat }) => {
  return (
    <div className="chat">
      <p className="chat__time">{chat.time}</p>
      {chat.userId === 'abc123' ? (
        <div className="chat__message-div">
          <img
            className={chat.userId === 'abc123' ? 'chat__image ' : 'chat__image chat__image--in'}
            src="https://www.foodwest.fi/wp-content/uploads/2016/11/blank-profile-picture-973460_1280.png"
            alt="W3Schools.com"
          />
          <div
            className={
              chat.userId === 'abc123'
                ? 'chat__message chat__message--out'
                : 'chat__message chat__message--in'
            }
          >
            {chat.message}
          </div>
        </div>
      ) : (
        <div className="chat__message-div">
          <div
            className={
              chat.userId === 'abc123'
                ? 'chat__message chat__message--out'
                : 'chat__message chat__message--in'
            }
          >
            {chat.message}
          </div>
          <img
            className={chat.userId === 'abc123' ? 'chat__image ' : 'chat__image chat__image--in'}
            src="https://www.foodwest.fi/wp-content/uploads/2016/11/blank-profile-picture-973460_1280.png"
            alt="W3Schools.com"
          />
        </div>
      )}
    </div>
  );
};

export default Chat;
