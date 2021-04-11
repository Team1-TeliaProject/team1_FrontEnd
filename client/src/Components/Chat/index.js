import React from 'react';

import './Chat.scss';
const Chat = ({ modifier, time, message }) => {
  return (
    <div className="chat">
      <p className={`chat__time chat__time--${modifier}`}>{time}</p>
      <div className={`chat__message chat__message--${modifier}`}>{message}</div>
    </div>
  );
};

export default Chat;
