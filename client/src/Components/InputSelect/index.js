import React from 'react';

import './InputSelect.scss';

const InputSelect = ({ options, handleInputChange }) => {
  return (
    <select onChange={handleInputChange} className="select" placeholder="Choose">
      <option value="">Select an Option</option>
      {options.map((opt, index) => (
        <option value={opt} key={index}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
