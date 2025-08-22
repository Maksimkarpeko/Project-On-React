import { useState } from 'react';

import { updateUserAuth } from 'api/user/user';
import { Back } from 'assets/index';
import clsx from 'clsx';
import { Button } from 'components/common/Button/Button';
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Select } from 'components/common/Select/Select';
import { InfoBlock } from 'constants/InputEdit';
import { Color } from 'constants/color';
import { months } from 'constants/months';
import { useFormik } from 'formik';
import { useCloseFlagAction, useIsOpen } from 'store/useFlagStore/useFlagStore';

import type { formikInitial } from './type';

export const EditProfile = () => {
  const [apiError, setApiError] = useState<string>('');
  const [apiSuccess, setApiSuccess] = useState<string>('');
  const CloseAction = useCloseFlagAction();
  const isOpen = useIsOpen();

  const formik = useFormik({
    initialValues: {
      userName: '',
      firstName: '',
      lastName: '',
      about: '',
      country: '',
      address: '',
      location: '',
      day: 0,
      months: '',
      years: 0,
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.firstName) {
        errors.firstName = 'First name is required';
      } else if (values.firstName.length < 2) {
        errors.firstName = 'First name should be at least 2 characters';
      }

      if (!values.lastName) {
        errors.lastName = 'Last name is required';
      } else if (values.lastName.length < 2) {
        errors.lastName = 'Last name should be at least 2 characters';
      }

      if (!values.about) {
        errors.about = 'About is required';
      }

      if (!values.location) {
        errors.location = 'Location is required';
      }

      if (!values.country) {
        errors.country = 'City is required';
      }

      if (!values.address) {
        errors.address = 'Address is required';
      }

      if (!values.day || values.day < 1 || values.day > 31) {
        errors.day = 'Day should be between 1 and 31';
      }

      if (!values.months) {
        errors.months = 'Month is required';
      }

      if (!values.years) {
        errors.years = 'Year is required';
      } else if (values.years < 1900 || values.years > new Date().getFullYear()) {
        errors.years = 'Year must be between 1900 and the current year';
      }

      if (!values.userName) {
        errors.userName = 'Username is required';
      } else if (values.userName.length < 3) {
        errors.userName = 'Must be at least 3 characters';
      } else if (values.userName.length > 20) {
        errors.userName = 'Must be 20 characters or less';
      }

      return errors;
    },
    onSubmit: (value) => {
      try {
        updateUserAuth({
          address: value.address,
          bio: value.about,
          country: value.country,
          day: value.day,
          firstName: value.firstName,
          lastName: value.lastName,
          location: value.location,
          month: value.months,
          username: value.userName,
          years: value.years,
          setApiError,
        });
        setApiSuccess("Data changed successfully")
      } catch {
        setApiError('An error has occurred');
      }
    },
  });
  const errorUserName = formik.errors.userName;
  const errorDay = formik.errors.day;
  const errorMonths = formik.errors.months;
  const errorYears = formik.errors.years;
  return (
    <>
      <div
        onClick={() => {
          CloseAction();
        }}
        className={clsx('sm:m-0 ml-[15%] w-[20%] md:hidden block ', isOpen ? '' : 'hidden')}
      >
        <img src={Back} alt="back" />
      </div>
      <div className={clsx('sm:mx-auto flex flex-col md:block ml-[5%]', isOpen ? '' : 'hidden')}>
        <div>
          <h2 className="text-2xl font-bold mt-3">Edit profile</h2>
        </div>
        <div>
          <h2 className="text-lg font-semibold mt-6 mb-4">Info</h2>
          {InfoBlock.map((item) => (
            <>
              <Input
                name={item.name}
                placeholder=""
                id={item.id}
                type="text"
                variant={Variant.text}
                inputColor={Color.bigDarkGray}
                title={item.title}
                key={item.id}
                value={formik.values[item.name as keyof formikInitial]}
                onChange={(e) => {
                  formik.setFieldValue(item.name, e.target.value);
                }}
                classname="mb-4"
                inputStyle="sm:w-[448px] w-[80%]"
              />
              {formik.errors[item.name as keyof formikInitial] &&
                formik.touched[item.name as keyof formikInitial] && (
                  <ErrorMessage errorMessage={formik.errors[item.name as keyof formikInitial]} />
                )}
            </>
          ))}
          <h2 className="text-lg font-semibold mt-6 mb-4">Username</h2>
          <Input
            name="userName"
            placeholder=""
            id="userName"
            type="text"
            variant={Variant.text}
            inputColor={Color.bigDarkGray}
            title="Username"
            key="userName"
            value={formik.values.userName}
            onChange={(e) => {
              formik.setFieldValue(`userName`, e.target.value);
            }}
            classname="mb-4"
            inputStyle="sm:w-[448px] w-[80%]"
          />
          {errorUserName && formik.touched.userName && (
            <ErrorMessage errorMessage={errorUserName} />
          )}
          <h2 className="text-lg font-semibold mt-6 mb-4">Birthday</h2>
          <div className="sm:flex sm:flex-row flex flex-col">
            <div>
              <Input
                name="day"
                placeholder="Day"
                type="number"
                variant={Variant.text}
                inputColor={Color.bigDarkGray}
                className="border w-24 h-14 p-4 bg-gray-200 rounded-md mr-4"
                value={formik.values.day}
                onChange={(e) => {
                  formik.setFieldValue('day', e.target.value);
                }}
                classname="mb-4"
              />
              {errorDay && formik.touched.day && <ErrorMessage errorMessage={errorDay} />}
            </div>
            <div>
              <Select
                name="months"
                id="months"
                options={months}
                selectColor={Color.darkGray}
                classname="w-48 h-14 mr-4"
                value={formik.values.months}
                onChange={(e) => {
                  const selectedMonth = (e.target as HTMLSelectElement).value;
                  formik.setFieldValue('months', selectedMonth);
                }}
              />
              {errorMonths && formik.touched.months && <ErrorMessage errorMessage={errorMonths} />}
            </div>
            <div>
              <Input
                name="years"
                placeholder="years"
                type="number"
                variant={Variant.text}
                inputColor={Color.bigDarkGray}
                className="border w-24 h-14 p-4 bg-gray-200 rounded-md mr-4"
                value={formik.values.years}
                onChange={(e) => {
                  formik.setFieldValue('years', e.target.value);
                }}
                classname="mb-4"
              />
              {errorYears && formik.touched.years && <ErrorMessage errorMessage={errorYears} />}
            </div>
          </div>
          {apiError && <ErrorMessage errorMessage={apiError} />}
          {apiSuccess && <div className='text-green-600'>{apiSuccess}</div>}
          <Button
            type="button"
            color={Color.blue}
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Save changes
          </Button>
        </div>
      </div>
    </>
  );
};
