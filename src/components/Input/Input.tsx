import type { FC } from 'react';
import { Variant,InputColor,InputTitle } from './constant';
import clsx from 'clsx';

import style from './input-style.module.scss';
import type { IInput } from './type';

export const Input: FC<IInput> = ({
  type = 'text',
  placeholder,
  name,
  onChange,
  value,
  required,
  classname,
  variant = 'text',
  inputColor,
  inputTitle,
  title,
  id,
  ...rest
}) => {
  const inputClassName = clsx(
    {
      [style.customRadio]: variant == Variant.radio,
      [style.customCheckBox]: variant == Variant.checkbox,
      [style.customInput]: variant == Variant.text,
    },
    {
      'bg-gray-100 px-4 py-2': inputColor == InputColor.gray,
      'bg-gray-200 px-4 py-2': inputColor == InputColor.darkGray,
      'bg-gray-100 px-4 py-5': inputColor == InputColor.bigGray,
      'bg-gray-200 px-4 pb-3 pt-5': inputColor == InputColor.bigDarkGray,
    },
  );
  const labelClassName = clsx({
    'text-blue-500': inputTitle == InputTitle.blueTitle,
    'text-red-500': inputTitle == InputTitle.redTitle,
    'text-gray-500': inputTitle == InputTitle.grayTitle,
  });
  return (
    <div className={clsx('relative',classname)}>
      {title && id && (
        <label htmlFor={id} className={clsx('absolute text-sm left-4', labelClassName)}>
          {title}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        className={clsx(inputClassName)}
        {...rest}
      />
    </div>
  );
};
