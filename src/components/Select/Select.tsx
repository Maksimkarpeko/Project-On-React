import type { FC } from 'react';

import clsx from 'clsx';

import { SelectColor } from './constant';
import type { ISelect } from './type';

export const Select: FC<ISelect> = ({
  options,
  classname,
  id,
  label,
  selectColor,
  ...rest
}) => {
  const selectClassName = clsx({
    'bg-gray-100': selectColor == SelectColor.gray,
    'bg-gray-200': selectColor == SelectColor.darkGray,
    'bg-gray-100 pt-4 pb-2': selectColor == SelectColor.bigGray,
    'bg-gray-200 pt-4 pb-2': selectColor == SelectColor.bigDarkGray,
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
          ' border border-gray-300 text-black text-sm rounded-lg w-80 p-2.5 outline-none',
          selectClassName,
          classname,
        )}
      >
        {options.map((option) => (
          <>
            <option value={option.value} key={option.value + 1}>
              {option.label}
            </option>
          </>
        ))}
      </select>
    </div>
  );
};
