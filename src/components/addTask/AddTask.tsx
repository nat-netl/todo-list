import React, { useState } from 'react';
import s from './AddTask.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useAppDispatch } from '../../hooks/actions';
import { addTodo } from '../../store/todos/todos.slice';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      dispatch(
        addTodo({
          id: uuid(),
          task,
          status: 'incomplete',
        }),
      );
      setTask('');
      toast.success('Task successfully added', {
        icon: '👏',
      });
    } else {
      toast.error('The name of the task shouldn`t be empty');
    }
  };

  return (
    <div className={s.add__task}>
      <ExpandMoreIcon className={s.arrow_down} style={{ color: '#e6e6e6', fontSize: '32px' }} />
      <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
        <Input
          className={s.add__input}
          value={task}
          placeholder='What needs to be done?'
          onChange={(e) => setTask(e.target.value)}
        />

        {task && (
          <Button className={s.add__btn}>
            <ArrowRightAltIcon className={s.add__btn__icon} />
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddTask;
