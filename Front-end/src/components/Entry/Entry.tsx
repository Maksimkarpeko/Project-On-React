import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/common/Button/Button';
import { buttonSize } from 'components/common/Button/constant';
import { Color } from 'constants/color';

import type { EntryProps } from './type';

export const Entry: FC<EntryProps> = ({
  children,
  title,
  navigateLink,
  subTitle,
  emailForm,
  passwordForm,
  usernameForm,
  bioForm,
  onClick,
  ...rest
}) => {
  const navigate = useNavigate();
  const handleNextStep = async () => {
    let hasErrors = false;
    if (emailForm) {
      const errorsEmail = await emailForm.validateForm();
      if (errorsEmail.email) {
        hasErrors = true;
      } else {
        emailForm.handleSubmit();
      }
    }
    if (passwordForm) {
      const errorsPassword = await passwordForm.validateForm();
      if (errorsPassword.password) {
        hasErrors = true;
      } else {
        passwordForm.handleSubmit();
      }
    }
    if(usernameForm){
      const errorsUserName = await usernameForm.validateForm();
      if(errorsUserName.username){
        hasErrors = true;
      } else {
        usernameForm?.handleSubmit();
      }
    }
    if (!hasErrors) {
        navigate(navigateLink);
    }
  };
  return (
    <div {...rest} className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-2xl mb-2">{title}</h1>
      <p className="text-sm mb-10">{subTitle}</p>
      {children}
      <Button
        type="button"
        color={Color.blue}
        size={buttonSize.sizeL}
        classname="mt-8"
        onClick={handleNextStep}
      >
        Next
      </Button>
    </div>
  );
};
