// src/components/Employee/EmployeeEdit.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import employeeService from '../../services/employeeService';
import Input from '../Common/Input';
import Button from '../Common/Button';

const EmployeeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({ name: '', position: '', email: '' });

  useEffect(() => {
    const fetchEmployee = async () => {
      const employee = await employeeService.getEmployeeById(id);
      setEmployeeData(employee);
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await employeeService.updateEmployee(id, employeeData);
    navigate('/employees');
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Name" name="name" value={employeeData.name} onChange={handleChange} />
        <Input label="Position" name="position" value={employeeData.position} onChange={handleChange} />
        <Input label="Email" type="email" name="email" value={employeeData.email} onChange={handleChange} />
        <Button text="Update Employee" />
      </form>
    </div>
  );
};

export default EmployeeEdit;
 
