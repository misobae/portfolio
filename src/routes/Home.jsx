import React, { Suspense } from 'react';
import Scene from '../components/Scene/Scene';

function Home() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Scene />
      </Suspense>
    </>
  )
}

export default Home;