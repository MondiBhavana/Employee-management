// src/components/Layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Employee Management System</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/employees">Employees</Link>
      </nav>
    </header>
  );
};

export default Header;
 
