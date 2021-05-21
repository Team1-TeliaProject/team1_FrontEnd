import React from 'react';

import './Chat.scss';
const Chat = ({ chat, user }) => {
  return (
    <div className="chat">
        <p className="chat__time">{new Date(chat.created_at).toLocaleTimeString()}</p>
        {chat.from === user.userId ? (
            <div className="chat__message-div">
                <div
                    className={
                        chat.from === user.userId
                            ? 'chat__message chat__message--out'
                            : 'chat__message chat__message--in'
                    }
                >
                    {chat.message}
                </div>
                <img
                    className={chat.from === user.userId ? 'chat__image ' : 'chat__image chat__image--in'}
                    src={user.photo}
                    alt="W3Schools.com"
                />
            </div>
        ) : (
            <div className="chat__message-div">
                <img
                    className={chat.from === user.userId ? 'chat__image ' : 'chat__image chat__image--in'}
                    src={user.photo}
                    alt="W3Schools.com"
                />
                <div
                    className={
                        chat.from === user.userId
                            ? 'chat__message chat__message--out'
                            : 'chat__message chat__message--in'
                    }
                >
                    {chat.message}
                </div>
            </div>
        )}
    </div>
  );
};

export default Chat;
