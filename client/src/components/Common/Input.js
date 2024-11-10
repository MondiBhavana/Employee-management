 // src/components/Common/Input.js
import React from 'react';

const Input = ({ label, type = "text", value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;

