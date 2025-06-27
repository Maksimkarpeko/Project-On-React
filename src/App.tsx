import { Button } from 'components/Button/Button';
import { buttonColor, buttonSize } from 'components/Button/constant';
import { Checkbox } from 'components/CheckBox/Checkbox';
import { Input } from 'components/Input/Input';
import { InputColor, InputTitle, Variant } from 'components/Input/constant';
import { Radio } from 'components/Radio/Radio';
import { Select } from 'components/Select/Select';
import { SelectColor } from 'components/Select/constant';
import { Switcher } from 'components/Switcher/Switcher';

import Arrow from './assets/Arrow.png';

function App() {
  return (
    <>
      <Button type="button" classname="m-10" color={buttonColor.blue} size={buttonSize.sizeL}>
        <img src={Arrow} alt="Arrow" />
        <span>Click me</span>
      </Button>
      <Button type="button" color={buttonColor.darkBlue} size={buttonSize.sizeXl}>
        Отправить
      </Button>
      <Checkbox />
      <Radio />
      <Radio />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={InputColor.gray}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={InputColor.darkGray}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={InputColor.bigGray}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={InputColor.bigDarkGray}
        title="label"
        inputTitle={InputTitle.blueTitle}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={InputColor.bigDarkGray}
        title="label"
        id="text"
        inputTitle={InputTitle.redTitle}
      />
      <Switcher />
      <Select
        selectColor={SelectColor.darkGray}
        options={[
          { label: 'dw', value: 's' },
          { label: 'd', value: 'sw' },
        ]}
      />
      <Select
        label="I don't now?)"
        id="name"
        options={[
          { label: 'dw', value: 's' },
          { label: 'd', value: 'sw' },
        ]}
        selectColor={SelectColor.bigGray}
      />
            <Select
        label="I don't now?)"
        id="name"
        options={[
          { label: 'dw', value: 's' },
          { label: 'd', value: 'sw' },
        ]}
        selectColor={SelectColor.bigDarkGray}
      />
    </>
  );
}

export default App;
