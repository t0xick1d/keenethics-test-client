import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.container}>
      <h2 className={s.title}>
        <span>Developer:</span> Yevgenii Stukalo
      </h2>
    </footer>
  );
};

export default Footer;
