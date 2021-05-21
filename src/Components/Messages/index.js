import React, {useEffect, useState} from 'react';

import Chat from '../Chat';
import Input from '../Input';
import { IoMdSend } from 'react-icons/io';

import './Messages.scss';
import io from "socket.io-client";

const ENDPOINT = 'https://duuni-app.herokuapp.com';
const Messages = ({ userInfo, matchedUser}) => {

    //*****************************
    //*******CHAT CODE START*******
    //*****************************
    const socket = io(ENDPOINT);
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
    const [contactRoom, setContactRoom] = useState();

    const addNewMessage = (message) => {
        setMessages(messages => [...messages, message])
    }

    const sendMessage = (event) => {
        event.preventDefault();
        event.target.blur()
        const message = {
            created_at: new Date(Date.now()).toISOString(),
            message: text,
            to: matchedUser.id,
            from: userInfo.userId,
        }

        addNewMessage(message)
        socket.emit("push new message", message, contactRoom);
        setText('')
    }

    //Join Room
    useEffect(() => {
        setContactRoom(userInfo.userId + matchedUser.id)

        socket.emit("join", {
            me: userInfo.userId,
            contact: matchedUser.id,
            room: userInfo.userId + matchedUser.id,
        },(error) => {
            if(error) {
                alert('ERROR : '+error);
            }
        });

        socket.on("get message history", setMessages)
        socket.on("new message", (message) => addNewMessage(message))

    }, [messages]);

    return (
    <div className="messages">
      <div className="messages__chat-div">
        {messages.map((item, index) => (
            <Chat chat={item} user={userInfo} key={index} />
        ))}
      </div>
      <hr className="messages__hr" />
      <div className="messages__send-div">
        <div className="messages__btn-div">
          <Input
            placeholder="Write your message"
            type='text'
            value={text}
            handleInputChange={({ target: { value } }) => setText(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
          />
        </div>
        <IoMdSend className="messages__icon" onClick={e => sendMessage(e)}/>
      </div>
    </div>
  );
};

export default Messages;
