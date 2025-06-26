import { Button } from 'components/Button/Button';
import { buttonColor, buttonSize } from 'components/Button/constant';
import { Input } from 'components/Input/Input';
import { InputColor, InputTitle, Variant } from 'components/Input/constant';

import Arrow from './assets/Arrow.png';

function App() {
  return (
    <>
      <Button type="button" classname="m-10" color={buttonColor.blue} size={buttonSize.sizeL}>
        <img src={Arrow} alt="Arrow" />
        <span>Нажми на меня</span>
      </Button>
      <Button type="button" color={buttonColor.darkBlue} size={buttonSize.sizeXl}>
        Отправить
      </Button>

      <Input name="radio" type="radio" placeholder="value" variant={Variant.radio} />
      <Input name="radio" type="radio" placeholder="value" variant={Variant.radio} />
      <Input name="checkbox" type="checkbox" placeholder="value" variant={Variant.checkbox} />
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
        id='text'
        inputTitle={InputTitle.redTitle}
      />
    </>
  );
}

export default App;
