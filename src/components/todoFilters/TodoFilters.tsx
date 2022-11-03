import React from 'react';
import Button from '../../ui/button/Button';
import s from './TodoFilters.module.scss';

const TodoFilters = () => {
  const itemsLeft = 100;

  return (
    <div className={s.filters}>
      <div className={s.count__items__left}>
        <Button>{itemsLeft} items left</Button>
      </div>
      <div className={s.by__state}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </div>
      <div className={s.clear__completed}>
        <Button>Clear completed</Button>
      </div>
    </div>
  );
};

export default TodoFilters;
