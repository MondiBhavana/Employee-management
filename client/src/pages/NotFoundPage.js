 
// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
