import React, { FC } from 'react';
import s from './Button.module.scss';
import { getClasses } from '../../utils/getClasses';

interface ButtonProps {
  children: any;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button type='submit' className={getClasses([s.filter__button, className])} {...rest}>
      {children}
    </button>
  );
};

export default Button;
