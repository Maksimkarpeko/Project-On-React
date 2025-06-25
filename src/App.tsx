import { Button } from 'components/Button/Button';
import { buttonColor, buttonSize } from 'components/Button/constant';
import { Input } from 'components/Input/Input';
import { inputColor, variant } from 'components/Input/constant';

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

      <Input name="radio" type="radio" placeholder="value" Variant={variant.radio} />
      <Input name="radio" type="radio" placeholder="value" Variant={variant.radio} />
      <Input name="checkbox" type="checkbox" placeholder="value" Variant={variant.checkbox} />
      <Input
        name="text"
        type="text"
        placeholder="value"
        Variant={variant.text}
        inputColor={inputColor.gray}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        Variant={variant.text}
        inputColor={inputColor.darkGray}
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        Variant={variant.text}
        inputColor={inputColor.bigGray}
        title="label"
      />
      <Input
        name="text"
        type="text"
        placeholder="value"
        Variant={variant.text}
        inputColor={inputColor.bigDarkGray}
      />
    </>
  );
}

export default App;
