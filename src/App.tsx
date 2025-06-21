import { useState } from 'react';

import { ButtonLoading } from 'components/ButtonLoading/ButtonLoading';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const switchLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <ButtonLoading
        loading={loading}
        text="Нажми на меня"
        type="button"
        onClick={switchLoading}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl m-10"
      />
    </>
  );
}

export default App;
