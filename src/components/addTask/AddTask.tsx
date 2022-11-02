import React from 'react';
import s from './AddTask.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Input from '../../ui/input/Input';

const AddTask = () => {
  return (
    <div className={s.add__task}>
      <ExpandMoreIcon className={s.arrow_down} style={{ color: '#e6e6e6', fontSize: '32px' }} />
      <Input value={''} placeholder='What needs to be done?' />
    </div>
  );
};

export default AddTask;
