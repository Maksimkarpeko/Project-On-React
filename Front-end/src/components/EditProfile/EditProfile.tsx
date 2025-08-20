import { Back } from 'assets/index';
import clsx from 'clsx';
import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Select } from 'components/common/Select/Select';
import { InfoBlock } from 'constants/InputEdit';
import { Color } from 'constants/color';
import { months } from 'constants/months';
import { useFormik } from 'formik';
import { useCloseFlagAction, useIsOpen } from 'store/useFlagStore/useFlagStore';

export const EditProfile = () => {
  const CloseAction = useCloseFlagAction();
  const isOpen = useIsOpen()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      about: '',
      location: '',
      status: '',
      day: 0,
      months: '',
      year: '',
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <>
      <div onClick={()=>{CloseAction()}} className={clsx(isOpen ? "":"hidden")}>
        <img src={Back} alt="back" />
      </div>
      <div className={clsx("mx-auto", isOpen ? "":"hidden")}>
        <div>
          <h2 className="text-2xl font-bold mt-3">Edit profile</h2>
        </div>
        <div>
          <h2 className="text-lg font-semibold mt-6 mb-4">Info</h2>
          {InfoBlock.map((item) => (
            <Input
              name={item.name}
              placeholder=" "
              id={item.id}
              type="text"
              variant={Variant.text}
              inputColor={Color.bigDarkGray}
              title={item.title}
              key={item.id}
              classname="mb-4 "
              inputStyle="w-[448px]"
            />
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
            classname="mb-4"
            inputStyle="w-[448px]"
          />

          <h2 className="text-lg font-semibold mt-6 mb-4">Birthday</h2>
          <div className="flex flex-row">
            <Input
              name="Day"
              placeholder="Day"
              type="number"
              variant={Variant.text}
              inputColor={Color.bigDarkGray}
              className="border w-24 h-14 p-4 bg-gray-200 rounded-md mr-4"
              key="Day"
              classname="mb-4"
            />
            <Select options={months} selectColor={Color.darkGray} classname="w-48 h-14 mr-4" />
            <Input
              name="Year"
              placeholder="Year"
              type="number"
              variant={Variant.text}
              inputColor={Color.bigDarkGray}
              className="border w-32 h-14 p-4 bg-gray-200 rounded-md mr-4"
              key="Year"
              classname="mb-4"
            />
          </div>

          <Button type="button" color={Color.blue}>
            Save changes
          </Button>
        </div>
      </div>
    </>
  );
};
