import { Button } from 'components/Button/Button';
import { buttonColor, buttonSize } from 'components/Button/constantsButton';

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
    </>
  );
}

export default App;
