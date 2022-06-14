import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Common.module.css';

function Navigation() {
  return (
    <nav className={css.nav}>
      <img
        className={css.img}
        src="data:image/png;base64,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"
        alt="vetbee orange logo"
      />
      <div>
        <NavLink className="link" to="/pets">
          Pets
        </NavLink>
        <NavLink className="link" to="/meds">
          Medications
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
