import { Link } from 'react-router-dom';

import errorImg from 'assets/img/ErrorImg.svg';
import { Button } from 'components/common/Button/Button';
import { buttonSize } from 'components/common/Button/constant';
import { Links } from 'constants/links';
import { Color } from 'constants/color';

export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img src={errorImg} alt="error" />
      <p className="text-2xl font-bold font-sans mt-4 mb-2">Something went wrong</p>
      <p className="mb-8">
        Return home or contact our team at{' '}
        <a href="https://mail.ru" target='_blank' className="text-blue-600">
          hello@openland.com
        </a>
      </p>
      <Link to={Links.homePage}>
        <Button type="button" color={Color.blue} size={buttonSize.sizeL}>
          Return home
        </Button>
      </Link>
    </div>
  );
};
