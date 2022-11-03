import React from 'react';
import { useAppSelector } from '../../hooks/actions';
import TodoItem from '../todoItem/TodoItem';
import s from './TodoList.module.scss';

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todos.todoList);

  return (
    <div className={s.todo__list}>
      <div className={s.todo__items}>
        {todoList.length ? (
          todoList.map((task) => <TodoItem key={task.id} id={task.id} task={task.task} status={task.status} />)
        ) : (
          <div className={s.todo__is__empty}>Список задач пуст</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
