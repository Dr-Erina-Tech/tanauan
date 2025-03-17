import React from 'react';
import { Sidebar, Header, StatsCard } from "../../components"

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
