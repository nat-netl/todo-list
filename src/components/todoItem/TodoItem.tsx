import React, { FC, useState, useEffect } from 'react';
import s from './TodoItem.module.scss';
import DoneIcon from '@mui/icons-material/Done';
import { getClasses } from '../../utils/getClasses';
import { TodoItemProps } from '../../types/types';
import { useAppDispatch } from '../../hooks/actions';
import { updateStatus } from '../../store/todos/todos.slice';

const TodoItem: FC<TodoItemProps> = ({ id, task, status }) => {
  const [taskStatus, setTaskStatus] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    status === 'complete' ? setTaskStatus(true) : setTaskStatus(false);
  }, [status]);

  console.log(taskStatus);

  const handleCheckTask = () => {
    setTaskStatus(!taskStatus);
    dispatch(
      updateStatus({
        id,
        task,
        status: taskStatus ? 'incomplete' : 'complete',
      }),
    );
  };

  return (
    <div className={s.item}>
      {status === 'complete' ? <DoneIcon className={s.status} /> : <span className={s.nstatus}></span>}

      <div
        onClick={handleCheckTask}
        className={getClasses([s.task__name, status === 'complete' && s.task__name__strikethrough])}
      >
        {task}
      </div>
    </div>
  );
};

export default TodoItem;
