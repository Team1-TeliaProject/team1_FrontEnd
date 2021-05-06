import React from 'react';

import './Textarea.scss';

const Textarea = ({ placeholder, handleInputChange, value, id, rows, maxLength, defaultValue, label }) => {
  return (
    <>
      <label htmlFor={id} className="label"> {label}</label>
      <textarea
        className="textarea"
        placeholder={placeholder}
        onChange={handleInputChange}
        defaultValue={defaultValue}
        value={value}
        id={id}
        rows={rows}
        maxLength={maxLength}
      />
    </>
  );
};

export default Textarea;
