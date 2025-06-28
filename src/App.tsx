import { Button } from 'components/Button/Button';
import { buttonColor, buttonSize } from 'components/Button/constant';
import { Checkbox } from 'components/CheckBox/Checkbox';
import { Input } from 'components/Input/Input';
import { InputTitle, Variant } from 'components/Input/constant';
import { Radio } from 'components/Radio/Radio';
import { Select } from 'components/Select/Select';
import { Switcher } from 'components/Switcher/Switcher';
import { Color } from 'constants/color';

import Arrow from './assets/Arrow.png';

function App() {
  return (
    <>
      <Button type="button" classname="m-10" color={buttonColor.blue} size={buttonSize.sizeL}>
        <img src={Arrow} alt="Arrow" />
        <span>Click me</span>
      </Button>
      <Button type="button" color={buttonColor.darkBlue} size={buttonSize.sizeXl}>
        Submit
      </Button>
      <Checkbox />
      <Radio />
      <Radio />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={Color.gray}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={Color.darkGray}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={Color.bigGray}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={Color.bigDarkGray}
        title="label"
        inputTitle={InputTitle.blueTitle}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        variant={Variant.text}
        inputColor={Color.bigDarkGray}
        title="label"
        id="text"
        inputTitle={InputTitle.redTitle}
      />
      <Switcher />
      <Select
        selectColor={Color.darkGray}
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
        selectColor={Color.bigGray}
      />
      <Select
        label="I don't now?)"
        id="name"
        options={[
          { label: 'dw', value: 's' },
          { label: 'd', value: 'sw' },
        ]}
        selectColor={Color.bigDarkGray}
      />
    </>
  );
}

export default App;
