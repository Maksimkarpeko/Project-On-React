import type { FC } from 'react';

import clsx from 'clsx';

import style from './input-style.module.scss';
import type { IInput } from './type';

export const Input: FC<IInput> = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  required,
  classname,
  Variant,
  beforeImg,
  afterImg,
  inputColor,
  inputTitle,
  title,
  ...rest
}) => {
  const inputClassName = clsx({
    [style.customRadio]: Variant == 'radio',
    [style.customCheckBox]: Variant == 'checkbox',
    [style.customInput]: Variant == 'text',
    'bg-gray-100 px-4 py-2': inputColor == 'gray',
    'bg-gray-200 px-4 py-2': inputColor == 'darkGray',
    'bg-gray-100 px-4 py-4': inputColor == 'bigGray',
    'bg-gray-200 px-4 py-4': inputColor == 'bigDarkGray',
  });
  return (
    <div className={clsx(classname)}>
      {beforeImg && (
        <div>
          <img src={`${beforeImg}`} alt="Картинка" />
        </div>
      )}
      {title && <span className="absolute text-xs left-4">{title}</span>}
      {/*Потом подумаю как решить эту проблему с title сверху а пока оставим как тут есть*/}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        className={clsx(inputClassName)}
        {...rest}
      />
      {afterImg && (
        <div>
          <img src={`${afterImg}`} alt="Картинка" />
        </div>
      )}
    </div>
  );
};
