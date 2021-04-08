import React from 'react';

import './InputSelect.scss';

const InputSelect = ({ options, handleInputChange }) => {
  return (
    (Array.isArray(options)) ? <select onChange={handleInputChange} className="select" placeholder="Choose">
    <option disabled value="">Select an Option</option>
    {options.map((opt, index) => (
      <option value={opt.toLowerCase()} key={index}>
        {opt}
      </option>
    ))}
  </select> : ''
  );
};

export default InputSelect;
