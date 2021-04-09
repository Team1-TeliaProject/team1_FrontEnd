import React from 'react';

import './InputSelect.scss';

const InputSelect = ({ options, handleInputChange, text }) => {
  text = (text && text !== '') ? text : 'Select an Option';
  return (
    (Array.isArray(options)) ? <select onChange={handleInputChange} className="select" placeholder="Choose">
    <option disabled value="">{text}</option>
    {options.map((opt, index) => (
      <option value={opt.toLowerCase()} key={index}>
        {opt}
      </option>
    ))}
  </select> : ''
  );
};

export default InputSelect;
