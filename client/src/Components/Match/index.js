import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FaCommentDots } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

import './Match.scss';

const MatchedJob = ({ data, type, setPage }) => {
  const history = useHistory();

  return (
    <div className="match">
      <div className="match__item">
        <img className="match__image" src={type === 'talent' ? data.logo : data.photo} />
      </div>
      <div className="match__item match__item--text">
        <h3 className="match__bold-text">
          {type == 'talent' ? data.title : `${data.firstName} ${data.lastName}`}
        </h3>
        <p className="match__normal-text">{type == 'talent' ? data.companyName : data.title}</p>
      </div>
      <div className="match__item match__item--text">
        <p className="match__normal-text">{data.location}</p>
        <p className="match__normal-text">{data.level}</p>
      </div>
      <div className="match__item match__item--icons">
        <FaCommentDots className="match__icon" />
        <FaInfoCircle
          onClick={() => history.push(`/job/${data.id}/details`)}
          className="match__icon"
        />
      </div>
    </div>
  );
};

export default MatchedJob;
