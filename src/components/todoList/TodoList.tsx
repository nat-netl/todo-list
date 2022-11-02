import React from 'react';
import { TodoItemProps } from '../../types/types';
import TodoItem from '../todoItem/TodoItem';
import s from './TodoList.module.scss';

const TodoList = () => {
  const todoList: TodoItemProps[] = [
    {
      id: 0,
      name: 'Абчихба',
      done: 'complete',
    },
    {
      id: 1,
      name: 'Абчихба',
      done: 'uncomplete',
    },
  ];

  return (
    <div className={s.todo__list}>
      <div className={s.todo__items}>
        {todoList.length
          ? todoList.map((task) => <TodoItem key={task.id} id={task.id} name={task.name} done={task.done} />)
          : 'Список задач пуст'}
      </div>
    </div>
  );
};

export default TodoList;
