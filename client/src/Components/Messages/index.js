import React, { useState } from 'react';

import Chat from '../Chat';
import Input from '../Input';
import { IoMdSend } from 'react-icons/io';

import './Messages.scss';
const Messages = ({ chats }) => {
  const [message, setMessage] = useState('');
  console.log(message);

  return (
    <div className="messages">
      <div className="messages__chat-div">
        {chats.map((item, index) => (
          <Chat chat={item} key={index} />
        ))}
      </div>
      <hr className="messages__hr" />
      <div className="messages__send-div">
        <div className="messages__btn-div">
          <Input
            placeholder="Write your message"
            handleInputChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <IoMdSend className="messages__icon" />
      </div>
    </div>
  );
};

export default Messages;
