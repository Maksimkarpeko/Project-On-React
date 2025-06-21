import { Button } from 'components/Button/Button';

import Arrow from './assets/Arrow.png';

function App() {
  return (
    <>
      <Button type="button" classNameButton="m-10" isPrimary>
        <img src={Arrow} alt="Arrow" />
        <span>Нажми на меня</span>
      </Button>
      <Button type='button'>
        Отправить
      </Button>
    </>
  );
}

export default App;
