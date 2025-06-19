import { useState } from 'react';

import { Button } from 'components/Button/Button';

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
      <Button
        text="Кнопка"
        className="bg-blue-500 px-6 py-2 rounded-lg text-white m-10"
        type="button"
        loading={loading}
        onClick={switchLoading}
        disabled={loading}
      />
    </>
  );
}

export default App;
