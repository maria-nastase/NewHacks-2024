import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh' }}>
          <div style={{ borderRight: '1px solid #ccc' }}>
            <Outlet context="screenAA" />
          </div>
          <div>
            <Outlet context="screenB" />
          </div>
        </div>
      );
};
export default Layout;
