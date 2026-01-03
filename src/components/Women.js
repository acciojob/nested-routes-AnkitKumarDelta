import React from "react";
import { NavLink } from "react-router-dom";

const Women = () => {
  return (
    <div>
      <p>Women Items:</p>
      <NavLink to="/women/grooming">Grooming</NavLink><br />
      <NavLink to="/women/shirt">Shirt</NavLink><br />
      <NavLink to="/women/trouser">Trouser</NavLink><br />
      <NavLink to="/women/jewellery">Jewellery</NavLink>
    </div>
  );
};

export default Women;
