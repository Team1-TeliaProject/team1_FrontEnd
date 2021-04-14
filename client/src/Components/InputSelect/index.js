import React from 'react';

import './InputSelect.scss';

const InputSelect = ({ options, handleInputChange, placeholder }) => {
  return (
    <select onChange={handleInputChange} className="select" placeholder="Choose">
      <option value="">{placeholder}</option>
      {options.map((opt, index) => (
        <option value={opt} key={index}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
