import React from 'react';
import { Sidebar, Header} from "../../components";
import { Outlet } from 'react-router-dom'; //to render dynamic content
import style from './DashboardLayout.module.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className={style.dashboardLayout}>
      <Sidebar />

      {/* Main Content Section */}
      <div className={style.mainContent}>
        <Header />

        {/* Dynamic Content */}
        <div className={style.contentArea}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
