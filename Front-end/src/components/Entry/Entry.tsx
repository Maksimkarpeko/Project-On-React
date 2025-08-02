import type { FC } from 'react';

import { Button } from 'components/common/Button/Button';
import { buttonSize } from 'components/common/Button/constant';
import { Color } from 'constants/color';

import type { EntryProps } from './type';

export const Entry: FC<EntryProps> = ({
  children,
  title,
  subTitle,
  formikForSingUp,
  formikForSingIn,
  bioForm,
  onClick,
  errorApi,
  ...rest
}) => {
  const handleNextStep =  () => {
    if (formikForSingUp) {
      formikForSingUp.handleSubmit();
    }
    if (formikForSingIn) {
      formikForSingIn.handleSubmit();
    }
    if (bioForm) {
      bioForm.handleSubmit();
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
