import search from 'assets/img/search.svg';
import testImg from 'assets/testImg.svg';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { Input } from 'components/common/Input/Input';
import { OtherStyle, Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';

export const Contact = () => {
  return (
    <div className="w-[360px] h-[100vh] absolute border-r ">
      <h2 className="my-3 ml-4 text-2xl font-bold">Contacts</h2>
      <img src={search} alt="search" className="absolute z-10 top-[66px] left-7" />
      <Input
        classname="mx-4 mb-4"
        name="text"
        type="text"
        variant={Variant.text}
        otherStyle={OtherStyle.search}
        placeholder="Search"
        inputColor={Color.gray}
      />
      <ContactUser name="FirstName LastName" alt="User" img={testImg} />
    </div>
  );
};
