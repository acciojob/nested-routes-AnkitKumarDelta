import React from "react";
import {NavLink} from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/women">Women</NavLink>
    </div>
  )
}

export default Layout
