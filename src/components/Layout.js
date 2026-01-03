import React from "react";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/women">Women</NavLink>
      </div>
    </div>
  );
};

export default Layout;
