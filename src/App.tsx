import { FC, Suspense } from 'react';

const App: FC = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <></>
      </Suspense>
    </div>
  );
};

export default App;
