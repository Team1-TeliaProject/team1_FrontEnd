import React from 'react';
import { useHistory } from 'react-router-dom';

import { FaCommentDots, FaInfoCircle } from 'react-icons/fa';

import './Match.scss';

const MatchedJob = ({ data, type, matchType }) => {
  const history = useHistory();

  const getDetails = () => {
    if (type === 'talent') {
      history.push(`/companyProfile/${data.id}`);
    } else {
      history.push(`/employeeProfile/${data.id}`);
    }
  };

  return (
    <div className={matchType === 'match' ? 'match' : 'match match--super'}>
      <div className="match__item">
        <img className="match__image" src={type === 'talent' ? data.logo : data.photo} />
      </div>
      <div className="match__item match__item--text">
        <h3 className="match__bold-text">
          {type == 'talent' ? data.name : `${data.firstName} ${data.lastName}`}
        </h3>
        <p className="match__normal-text">{type == 'talent' ? data.website : data.title}</p>
      </div>
      <div className="match__item match__item--text">
        <p className="match__normal-text">{data.location}</p>
        <p className="match__normal-text">{type == 'talent' ? data.email : data.level}</p>
      </div>
      <div className="match__item match__item--icons">
        {/* <FaCommentDots className="match__icon" /> */}
        <FaInfoCircle onClick={getDetails} className="match__icon" />
      </div>
    </div>
  );
};

export default MatchedJob;
