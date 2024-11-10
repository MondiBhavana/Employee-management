// src/components/Employee/EmployeeItem.js
import React from 'react';
import Button from '../Common/Button';

const EmployeeItem = ({ employee }) => {
  const handleDelete = () => {
    // handle delete logic
  };

  return (
    <li>
      {employee.name} - {employee.position}
      <Button text="Edit" />
      <Button text="Delete" onClick={handleDelete} />
    </li>
  );
};

export default EmployeeItem;
