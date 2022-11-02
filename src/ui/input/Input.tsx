import React, { FC } from 'react';
import { RestTypeNode } from 'typescript';
import { getClasses } from '../../utils/getClasses';
import s from './Input.module.scss';

interface InputTextProps {
  value: string;
  className?: string;
  placeholder?: string;
  rest?: RestTypeNode;
}

const Input: FC<InputTextProps> = ({ value, className, placeholder, ...rest }) => {
  return (
    <input className={getClasses([s.input, className])} value={value} placeholder={placeholder} type='text' {...rest} />
  );
};

export default Input;
