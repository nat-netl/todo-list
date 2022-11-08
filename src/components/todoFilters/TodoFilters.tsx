import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/actions';
import { clearCompletedTodo, updateFilterStatus } from '../../store/todos/todos.slice';
import InputSubmit from '../../ui/inputSubmit/InputSubmit';
import s from './TodoFilters.module.scss';

const TodoFilters = () => {
  const filterStatus = useAppSelector((state) => state.todos.filterStatus);
  const todoItems = useAppSelector((state) => state.todos.todoList);
  const countLeftItems = todoItems.filter((task) => task.status === 'active').length;
  const dispatch = useAppDispatch();

  const filters = [
    { id: 0, status: 'All' },
    { id: 1, status: 'Active' },
    { id: 2, status: 'Completed' },
  ];

  const updateStatus = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  const clearCompleted = () => {
    dispatch(clearCompletedTodo());
  };

  return (
    <div className={s.filters}>
      <div className={s.count__items__left}>
        <div>{countLeftItems} items left</div>
      </div>
      <div className={s.by__state}>
        {filters.map((filter) => (
          <InputSubmit
            key={filter.id}
            onClick={updateStatus}
            className={filterStatus.toLowerCase() === filter.status.toLowerCase() ? s.active__filter : null}
            value={filter.status}
          />
        ))}
      </div>
      <div className={s.clear__completed}>
        <InputSubmit onClick={clearCompleted} value='Clear completed' />
      </div>
    </div>
  );
};

export default TodoFilters;
