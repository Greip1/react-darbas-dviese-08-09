import css from './Common.module.css';

import React from 'react';

function Footer() {
  return (
    <div className={css.footerCont}>
      <p className={css.footerText}>Copyright © VetBee 2018. All rights reserved.</p>
    </div>
  );
}

export default Footer;
