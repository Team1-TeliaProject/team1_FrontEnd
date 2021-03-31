import React from 'react';

import './Button.scss';

const Button = ({ text, handleClick, modifier }) => {
  return (
    <div className="main">
      <button className={`main__button main__button--${modifier}`}>{text}</button>
    </div>
  );
};

export default Button;
