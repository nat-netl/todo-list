import React from 'react';
import AddTask from '../addTask/AddTask';
import TodoFilters from '../todoFilters/TodoFilters';
import TodoList from '../todoList/TodoList';
import s from './Todos.module.scss';

const Todos = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.todos}>
        <AddTask />
        <TodoList />
        <TodoFilters />
      </div>
      <div className={s.step}></div>
      <div className={s.step}></div>
    </div>
  );
};

export default Todos;
