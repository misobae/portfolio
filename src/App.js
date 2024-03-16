import React, { Suspense } from 'react';
import Scene from "./components/Scene/Scene";

const App = () => {
  return (
    <Suspense>
      <Scene />
    </Suspense>
  );
};

export default App;