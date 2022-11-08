import React, { FC } from 'react';
import s from './InputSubmit.module.scss';
import { getClasses } from '../../utils/getClasses';

interface InputSubmitProps {
  className?: string;
  value?: any;
  onChange?: (e) => void;
  onClick?: any;
  children?: any;
}

const InputSubmit: FC<InputSubmitProps> = ({ value, className, children, ...props }) => {
  return (
    <input type='submit' value={value} className={getClasses([s.input__submit, className])} {...props}>
      {children}
    </input>
  );
};

export default InputSubmit;
