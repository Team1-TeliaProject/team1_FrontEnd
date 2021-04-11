import React from 'react';
import Chat from '../../Components/Chat';

import './TryOutPage.scss';

const TryOutPage = () => {
  return (
    <div className="tryout">
      <h1>check out your components here</h1>
      <Chat
        modifier="in"
        time="14:30"
        message="A very nice message sent by a very favorite person on a very nice moment of the time "
      />
      <Chat
        modifier="out"
        time="14:30"
        message="A very nice message sent by a very favorite person on a very nice moment of the time "
      />
    </div>
  );
};

export default TryOutPage;
