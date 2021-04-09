import React from 'react';

import './Input.scss';
const Input = ({ handleInputChange, placeholder, type, id, value }) => {
  return (
   <div>
      <input
      id={id}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      type={type}
      className="input"
    />
   </div>
  );
};

export default Input;
