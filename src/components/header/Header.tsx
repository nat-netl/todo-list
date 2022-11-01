import React, { FC } from 'react';
import s from './header.module.scss';

const Header: FC = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>todos</h1>
    </div>
  );
};

export default Header;
