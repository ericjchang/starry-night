import React, { lazy, Suspense, useState, useEffect } from 'react';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainComponent = lazy(() => import('./components/Main'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <MainComponent />
        </Suspense>
      )}
    </div>
  );
};

export default App;
