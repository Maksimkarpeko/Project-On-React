import type { FC } from 'react';

import type { ErrorMessageProps } from './type';

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage, ...rest }) => {
  return (
    <div className="text-red-600 mb-2" {...rest}>
      {errorMessage instanceof Error ? errorMessage.message : errorMessage}
    </div>
  );
};
