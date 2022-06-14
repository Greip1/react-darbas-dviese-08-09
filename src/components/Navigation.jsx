import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink className="nav-link " to="/pets">
        Pets
      </NavLink>
      <NavLink className="nav-link" to="/meds">
        Medication
      </NavLink>
    </nav>
  );
}

export default Navigation;
