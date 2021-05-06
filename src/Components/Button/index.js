import React from 'react';
import './Buttons.scss';

/*
 * Buttons are offered in three sizes
 * use bg for big
 * use md fro medium
 * use sm for small
 */

const Button = ({ text, modifier, handleClick }) => {
  return (
    <button className={`button button--${modifier} `} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
