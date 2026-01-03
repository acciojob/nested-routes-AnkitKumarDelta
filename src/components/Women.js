import React from "react";
import { NavLink } from "react-router-dom";

const Women = () => {
  return (
    <div>
      <p>Women Items:</p>

      <ul>
        <li>
          <NavLink to="/women/grooming">Grooming</NavLink>
        </li>
        <li>
          <NavLink to="/women/shirt">Shirt</NavLink>
        </li>
        <li>
          <NavLink to="/women/trouser">Trouser</NavLink>
        </li>
        <li>
          <NavLink to="/women/jewellery">Jewellery</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Women;
