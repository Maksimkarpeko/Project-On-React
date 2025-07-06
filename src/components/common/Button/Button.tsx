import type { FC } from 'react';

import clsx from 'clsx';

import { buttonColor, buttonSize } from './constant';
import type { ButtonProps } from './type';
import { Color } from 'constants/color';

export const Button: FC<ButtonProps> = ({
  classname,
  type = 'button',
  onClick,
  disabled,
  children,
  size,
  color,
  ...rest
}) => {
  const buttonClassName = clsx({
    'bg-blue-500': color === buttonColor.blue,
    'bg-blue-400': color === buttonColor.lightBlue,
    'bg-blue-700': color === buttonColor.darkBlue,
    'bg-red-500': color === buttonColor.red,
    'bg-red-400': color === buttonColor.lightRed,
    'bg-red-700': color === buttonColor.darkRed,
    'bg-gray-500': color === Color.gray,
    'bg-gray-300': color === buttonColor.lightGray,
    'bg-gray-800': color === Color.darkGray,
    'bg-opacity-25': color === buttonColor.limpidS,
    'bg-opacity-50': color === buttonColor.limpidL,
    'bg-opacity-75': color === buttonColor.limpidXl,
    'px-4 py-2 text-sm': size === buttonSize.sizeL,
    'px-[66px] py-2 text-sm':size === buttonSize.sizeLL,
    'px-6 py-3 text-base': size === buttonSize.sizeXl,
  });
  return (
    <button
      type={type}
      className={clsx('rounded-lg text-white', buttonClassName, classname)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
