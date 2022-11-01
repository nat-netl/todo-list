import React, { FC } from 'react';
import s from './home.module.scss';
import m from './../../app/styles/main.module.scss';
import Header from '../../components/header/Header';

const Home: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={m.container}>
        <Header />
      </div>
    </div>
  );
};

export default Home;
