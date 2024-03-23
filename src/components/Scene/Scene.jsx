import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

import Loader from "./Loader";
import Lamp from './Lamp';
import Text from './Text';
import Points from './Points';
import Rig from './Rig';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 15 }} style={{ width: '100vw', height: '100vh' }}>
      <Suspense fallback={<Loader />}>

        <ambientLight intensity={1} color="#fff" />

        <spotLight
          position={[0, -1, 0.6]}
          color="#fff"
          intensity={100}
          angle={1.5}
          penumbra={0.1}
        />
        <Lamp />
        
        <Text />

        <Rig />

        <Float rotationIntensity={1} floatIntensity={1} speed={0.5}>
          <Points points={
            Array.from({ length: 3000 },
            () => new THREE.Vector3().random().subScalar(0.5).multiplyScalar(10))}
          />
        </Float>
      </Suspense>
    </Canvas>
  );
};


export default Scene;