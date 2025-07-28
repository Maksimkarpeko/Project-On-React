import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/common/Button/Button';
import { buttonSize } from 'components/common/Button/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';

import type { EntryProps } from './type';

export const Entry: FC<EntryProps> = ({
  children,
  title,
  navigateLink,
  text,
  formikEmail,
  formikPassword,
  onClick,
  ...rest
}) => {
  const navigate = useNavigate();
  const handelButton = async () => {
    let hasErrors = false;
    if (formikEmail) {
      const errorsEmail = await formikEmail.validateForm();
      if (errorsEmail.email) {
        hasErrors = true;
      } else {
        formikEmail.handleSubmit();
      }
    }
    if (formikPassword) {
      const errorsPassword = await formikPassword.validateForm();
      if (errorsPassword.password) {
        hasErrors = true;
      } else {
        formikPassword.handleSubmit();
      }
    }
    if (!hasErrors) {
        navigate(navigateLink);
    }
  };
  return (
    <div {...rest} className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-2xl mb-2">{title}</h1>
      <p className="text-sm mb-10">{text}</p>
      {children}
      <Button
        type="button"
        color={Color.blue}
        size={buttonSize.sizeL}
        classname="mt-8"
        onClick={handelButton}
      >
        Next
      </Button>
    </div>
  );
};
