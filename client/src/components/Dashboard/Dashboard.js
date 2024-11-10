 // src/components/Dashboard/Dashboard.js
import React from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import Footer from '../Layout/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <main>
        <h1>Welcome to the Dashboard</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

