 // src/components/Employee/EmployeeCreate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import employeeService from '../../services/employeeService';
import Input from '../Common/Input';
import Button from '../Common/Button';

const EmployeeCreate = () => {
  const [employeeData, setEmployeeData] = useState({ name: '', position: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await employeeService.createEmployee(employeeData);
    navigate('/employees');
  };

  return (
    <div>
      <h2>Create New Employee</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={employeeData.name}
          onChange={handleChange}
        />
        <Input
          label="Position"
          name="position"
          value={employeeData.position}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={employeeData.email}
          onChange={handleChange}
        />
        <Button text="Create Employee" />
      </form>
    </div>
  );
};

export default EmployeeCreate;

