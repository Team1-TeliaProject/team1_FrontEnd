import React from 'react';

import './Input.scss';
const Input = ({ handleInputChange, placeholder, type, id, value, handleFocus, defaultValue, label }) => {
  return (
    <>
      <label htmlFor={id} className="label"> {label}</label>
      <input
        required
        id={id}
        defaultValue={defaultValue}
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        type={type}
        className="input"
      />
    </>
  );
};

export default Input;
