import { FC, Suspense } from 'react';
import Home from './pages/home/Home';

const App: FC = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
};

export default App;
