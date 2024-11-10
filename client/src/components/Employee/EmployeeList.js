// src/components/Employee/EmployeeList.js
import React, { useEffect, useState } from 'react';
import employeeService from '../../services/employeeService';
import EmployeeItem from './EmployeeItem';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await employeeService.getAllEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
