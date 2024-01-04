import React from 'react';

import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>ADMIN.BIKE-BOOKING.COM</h1>
    </div>
  );
};

export default Header;
