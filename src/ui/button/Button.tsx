import React, { FC } from 'react';
import s from './Button.module.scss';
import { getClasses } from '../../utils/getClasses';

interface FilterButtonProps {
  children: any;
  className?: string;
}

const FilterButton: FC<FilterButtonProps> = ({ children, className }) => {
  return (
    <button type='submit' className={getClasses([s.filter__button, className])}>
      {children}
    </button>
  );
};

export default FilterButton;
