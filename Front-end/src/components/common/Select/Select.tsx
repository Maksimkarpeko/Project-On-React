import type { FC } from 'react';

import clsx from 'clsx';
import { Color } from 'constants/color';

import type { SelectProps } from './type';

export const Select: FC<SelectProps> = ({
  options,
  classname,
  id,
  label,
  selectColor,
  ...rest
}) => {
  const selectClassName = clsx({
    'bg-gray-100': selectColor == Color.gray,
    'bg-gray-200': selectColor == Color.darkGray,
    'bg-gray-100 pt-4 pb-2': selectColor == Color.bigGray,
    'bg-gray-200 pt-4 pb-2': selectColor == Color.bigDarkGray,
  });
  return (
    <div className="relative">
      {label && id && (
        <label htmlFor={id} className="absolute text-xs text-gray-400 left-4">
          {label}
        </label>
      )}
      <select
        name=""
        id={id}
        {...rest}
        className={clsx(
          'border border-gray-500 text-black text-sm rounded-lg p-2.5 outline-none',
          selectClassName,
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
