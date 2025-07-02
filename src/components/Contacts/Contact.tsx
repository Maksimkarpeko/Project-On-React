import search from 'assets/img/search.svg';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';

export const Contact = () => {
  return (
    <div className="w-[360px] h-[100vh] absolute">
      <h2>Contacts</h2>
      <img src={search} alt="search" className="absolute z-10 top-[34px] left-5" />
      <Input
        classname="mx-4"
        name="text"
        type="text"
        variant={Variant.text}
        placeholder="Search"
        inputColor={Color.gray}
      />
    </div>
  );
};
