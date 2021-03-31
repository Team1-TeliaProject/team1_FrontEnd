import React from 'react';

import './Input.scss';
const Input = ({ handleInputChange, placeholder, type, id }) => {
  return (
    <input
      id={id}
      onChange={handleInputChange}
      placeholder={placeholder}
      type={type}
      className="input"
    />
  );
};

export default Input;
