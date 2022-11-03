import React, { FC } from 'react';
import s from './home.module.scss';
import m from './../../app/styles/main.module.scss';
import Header from '../../components/header/Header';
import Todos from '../../components/todos/Todos';
import { Toaster } from 'react-hot-toast';

const Home: FC = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={m.container + ' ' + s.bg}>
          <Header />
          <Todos />
        </div>
      </div>
      <Toaster
        position='bottom-right'
        toastOptions={{ style: { fontSize: '1.4rem', color: '#5e5e5e', background: '#e6dfdd', borderRadius: '10px' } }}
      />
    </>
  );
};

export default Home;
