import React from 'react';

import './Textarea.scss';

const Textarea = ({ placeholder, handleInputChange, value, id, rows, maxLength }) => {
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      onChange={handleInputChange}
      value={value}
      id={id}
      rows={rows}
      maxLength={maxLength}
    />
  );
};

export default Textarea;
