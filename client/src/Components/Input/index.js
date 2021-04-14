import React from 'react';

import './Input.scss';
const Input = ({ handleInputChange, placeholder, type, id, value, handleFocus }) => {
  return (
    <input
      required
      id={id}
      value={value}
      onChange={handleInputChange}
      onFocus={handleFocus}
      placeholder={placeholder}
      type={type}
      className="input"
    />
  );
};

export default Input;
