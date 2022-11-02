import React, { FC } from 'react';
import s from './TodoItem.module.scss';
import DoneIcon from '@mui/icons-material/Done';
import { getClasses } from '../../utils/getClasses';
import { TodoItemProps } from '../../types/types';

const TodoItem: FC<TodoItemProps> = ({ id, name, done }) => {
  return (
    <div className={s.item}>
      {done === 'complete' ? <DoneIcon className={s.item__done} /> : <span className={s.item__ndone}></span>}

      <div className={getClasses([s.item__task__name, done === 'complete' && s.item__task__name__strikethrough])}>
        {name}
      </div>
    </div>
  );
};

export default TodoItem;
