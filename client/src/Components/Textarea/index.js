import React from 'react';

import './Textarea.scss';

const Textarea = ({ placeholder, handleInputChange, value, id, rows, maxLength, defaultValue }) => {
  return (
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
  );
};

export default Textarea;
