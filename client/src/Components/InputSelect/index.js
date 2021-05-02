import React from 'react';

import './InputSelect.scss';

const InputSelect = ({ options, handleInputChange, placeholder, label, id }) => {
  console.log(label)
  return (
    <>
    <label htmlFor={id} className="label"> {label}</label>
    <select id={id} onChange={handleInputChange} className="select" placeholder="Choose">
      <option value="">{placeholder}</option>
      {options.map((opt, index) => (
        <option value={opt} key={index}>
          {opt}
        </option>
      ))}
    </select>
    </>
  );
};

export default InputSelect;
