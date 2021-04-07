import React from 'react';

import './Button.scss';

const Button = ({ text, handleClick, modifier }) => {
  return (
    <div>
      <div className="main">
        <button className={`main__button main__button--${modifier}`}>{text}</button>
      </div>
      {/* naming style */}
      <div className="employee-card">
        <div className="employee-card__section1">
          <p className="employee-card__text"></p>
          <p className="employee-card__text  employee-card__text--big-text"></p>
        </div>
      </div>
    </div>
  );
};

export default Button;
