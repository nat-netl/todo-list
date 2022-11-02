import React from 'react';
import FilterButton from '../../ui/button/Button';
import s from './TodoFilters.module.scss';

const TodoFilters = () => {
  const itemsLeft = 100;

  return (
    <div className={s.filters}>
      <div className={s.count__items__left}>
        <FilterButton className={s.button}>{itemsLeft} items left</FilterButton>
      </div>
      <div className={s.by__state}>
        <FilterButton className={s.button}>All</FilterButton>
        <FilterButton className={s.button}>Active</FilterButton>
        <FilterButton className={s.button}>Completed</FilterButton>
      </div>
      <div className={s.clear__completed}>
        <FilterButton className={s.button}>Clear completed</FilterButton>
      </div>
    </div>
  );
};

export default TodoFilters;
