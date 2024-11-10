import React from 'react';
import EmployeeList from '../components/Employee/EmployeeList';
import { Link } from 'react-router-dom';

const EmployeePage = () => {
  return (
    <div>
      <h1>Employees</h1>
      <Link to="/employees/create">
        <button>Add New Employee</button>
      </Link>
      <EmployeeList />
    </div>
  );
};

export default EmployeePage;
