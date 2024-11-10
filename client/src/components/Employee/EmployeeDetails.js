 // src/components/Employee/EmployeeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import employeeService from '../../services/employeeService';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await employeeService.getEmployeeById(id);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Email:</strong> {employee.email}</p>
    </div>
  );
};

export default EmployeeDetails;

