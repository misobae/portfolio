import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

import Lamp from './Lamp';
import Text from './Text';
import Points from './Points';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 15 }}>
      <ambientLight intensity={1} color="#fff" />

      <spotLight
        position={[0, -1, 0.6]}
        color={"#fff"}
        intensity={100}
        angle={1.5}
        penumbra={0.1}
      />
      <Lamp position-y={2.5} scale={0.005} />
      
      <Text />

      <Float rotationIntensity={1} floatIntensity={1} speed={0.5}>
        <Points points={
          Array.from({ length: 3000 },
          () => new THREE.Vector3().random().subScalar(0.5).multiplyScalar(10))}
        />
      </Float>
    </Canvas>
  );
};

export default Scene;