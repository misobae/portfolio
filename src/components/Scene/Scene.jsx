import React from 'react';

import { useRecoilValue } from 'recoil';
import { lightState } from '../../state/atoms';

import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { a, useSpring, animated } from '@react-spring/three'

import Lamp from './Lamp';
import Text from './Text';
import Points from './Points';

const AnimatedLamp = animated(Lamp);

function Scene() {
  const isLight = useRecoilValue(lightState);
  const { lampSpring } = useSpring({
    lampSpring: isLight,
    delay: isLight ? 100 : 500
  });
  const lampY = lampSpring.to([0, 1], [5, 2.5]);

  const { lightSpring } = useSpring({
    lightSpring: isLight,
    config: { bounce: 0, friction: 1 },
    delay: isLight ? 650 : 0
  });
  const lightIntensity = lightSpring.to([0, 1], [0, 100]);

  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 15 }}>
      <ambientLight intensity={1} color="#fff" />

      <a.spotLight
        position={[0, -1, 0.6]}
        color={"#fff"}
        intensity={lightIntensity}
        angle={1.5}
        penumbra={0.1}
      />
      <AnimatedLamp position-y={lampY} scale={0.005} />
      
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