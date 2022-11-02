import React, { FC } from 'react';
import s from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={s.wrapper}>
      <h1 className={s.title}>todos</h1>
    </header>
  );
};

export default Header;
