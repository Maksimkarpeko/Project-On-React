import { Button } from 'components/Button/Button';
import Arrow from "./assets/Arrow.png"

function App() {
  return (
    <>
      <Button text="Нажми на меня" type="button" className="m-10" >
        <img src={Arrow} alt="Arrow" />
        <span>Нажми на меня</span>
      </Button>
    </>
  );
}

export default App;
