import type { FC } from 'react';

import clsx from 'clsx';
import {Color } from 'constants/color';

import type { SelectProps } from './type';
import { Size } from 'constants/size';

export const Select: FC<SelectProps> = ({
  options,
  classname,
  id,
  label,
  value,
  selectColor,
  name,
  size,
  ...rest
}) => {
  const selectClassName = clsx({
    'bg-gray-100': selectColor == Color.gray,
    'bg-gray-200': selectColor == Color.darkGray,
  });
  const selectSize:Record<Size,string> = {
    [Size.S]: 'pt-4 pb-2',
    [Size.L]: 'pt-8 pb-4',
  }
  return (
    <div className="relative">
      {label && id && (
        <label htmlFor={id} className="absolute text-xs text-gray-400 left-4">
          {label}
        </label>
      )}
      <select
        name={name}
        id={id}
        value={value}
        {...rest}
        className={clsx(
          'border border-gray-500 text-black text-sm rounded-lg p-2.5 outline-none',
          selectClassName,
          selectSize,
          classname,
        )}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
