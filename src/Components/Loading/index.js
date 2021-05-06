import React, { useState } from 'react';
import ReactLoading from 'react-loading';

import sorryImage from '../../Assets/sorry.png';

import './Loading.scss';
const Loading = ({ text }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 7000);

  return (
    <div className="loading">
      {loading ? (
        <div className="loading__content">
          <p className="loading__text">{`Loading ${text}...`}</p>
          <ReactLoading type={'bars'} color={'white'} height={300} width={175} />
        </div>
      ) : (
        <div className="loading__content">
          <p className="loading__text">Sorry! no data available....</p>
          <img className="loading__image" src={sorryImage} alt="sorry illustration" />
        </div>
      )}
    </div>
  );
};

export default Loading;
