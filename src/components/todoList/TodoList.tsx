import React from 'react';
import { useAppSelector } from '../../hooks/actions';
import TodoItem from '../todoItem/TodoItem';
import s from './TodoList.module.scss';

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todos.todoList);
  const filterStatus = useAppSelector((state) => state.todos.filterStatus);

  const filteredTodoList = [...todoList].filter((task) => {
    if (filterStatus === 'all') return true;

    return task.status === filterStatus;
  });

  return (
    <div className={s.todo__list}>
      <div className={s.todo__items}>
        {filteredTodoList.length ? (
          filteredTodoList.map((task) => <TodoItem key={task.id} id={task.id} task={task.task} status={task.status} />)
        ) : (
          <div className={s.todo__is__empty}>Not todo found</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
