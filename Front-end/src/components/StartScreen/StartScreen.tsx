import { type FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { checkAuth } from 'api/Auth/auth';
import { LogoXL } from 'assets/index';
import { Button } from 'components/common/Button/Button';
import { buttonSize } from 'components/common/Button/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';

import type { StartProps } from './type';

export const StartScreen: FC<StartProps> = ({ title, ...rest }) => {
  const navigator = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
      navigator(Links.homePage);
    }
  }, []);
  return (
    <div {...rest} className="h-screen flex flex-col justify-center items-center">
      <img src={LogoXL} alt="logo" className="mb-4" />
      <h1 className="mb-2 font-bold text-2xl">{title}</h1>
      <p className="mb-8 text-center">
        Modern social network <br />
        built for you, not advertisers
      </p>
      <Link to={Links.singUp}>
        <Button type="button" color={Color.blue} size={buttonSize.sizeL}>
          Continue with email
        </Button>
      </Link>
      <p className="mt-5">
        If you have account go to{' '}
        {
          <Link
            to={Links.singIn}
            className="text-blue-500 hover:opacity-50  hover:border-b hover:border-blue-600"
          >
            Sign In
          </Link>
        }
      </p>
    </div>
  );
};
