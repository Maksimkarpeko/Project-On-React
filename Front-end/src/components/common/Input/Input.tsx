import type { FC } from 'react';

import clsx from 'clsx';
import { Color} from 'constants/color';

import { InputTitle, OtherStyle, Variant } from './constant';
import style from './input.module.scss';
import type { InputProps } from './type';
import { Size } from 'constants/size';

export const Input: FC<InputProps> = ({
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
  otherStyle,
  inputStyle,
  sizeInput,
  ...rest
}) => {
  const inputClassName = clsx(
    {
      [style.customInput]: variant == Variant.text,
    },
    {
      'bg-gray-100 px-4 py-2': inputColor == Color.gray,
      'bg-gray-200 px-4 py-2': inputColor == Color.darkGray,
      'bg-gray-100 px-4 py-5': sizeInput == Size.S ,
      'bg-gray-200 px-4 pb-3 pt-5': sizeInput == Size.L,
    },
    {
      'pl-9':otherStyle == OtherStyle.search
    },
    inputStyle
  );
  const titleClassName = clsx({
    'text-blue-500': inputTitle == InputTitle.blueTitle,
    'text-red-500': inputTitle == InputTitle.redTitle,
    'text-gray-500': inputTitle == InputTitle.grayTitle,
  });
  return (
    <div className={clsx('relative', classname)}>
      {title && id && (
        <label htmlFor={id} className={clsx('absolute text-sm left-4 text-gray-400', titleClassName)}>
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
