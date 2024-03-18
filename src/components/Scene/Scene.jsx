import React from 'react';
import { useRecoilValue } from 'recoil';
import { lightState } from '../../state/atoms';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Float, Center, Text3D } from '@react-three/drei';
import * as THREE from 'three';
import { a, useSpring, animated } from '@react-spring/three'
import { easing } from "maath";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import Lamp from './Lamp';
import Points from './Points';

const AnimatedCenter = animated(Center);
const AnimatedLamp = animated(Lamp);

const name = (type) => `./texture/Metal032_1K-JPG_${type}.jpg`;

function Scene() {
  const isLight = useRecoilValue(lightState);

  const { lampSpring } = useSpring({
    lampSpring: isLight,
  });
  
  const { lightSpring } = useSpring({
    lightSpring: isLight,
    config: { bounce: 0, friction: 1 },
    delay: isLight ? 600 : 0
  });
  
  const { textSpring } = useSpring({
    textSpring: isLight,
    config: { bounce: 0, friction: 0, tension: 0 },
    delay: 250
  });

  const lampY = lampSpring.to([0, 1], [6, 2.5]);
  const lightIntensity = lightSpring.to([0, 1], [0, 100]);
  const textScale = textSpring.to([0, 1], [0, 1]);

  // Text Texture
  const [
    colorMap,
    displacementMap,
    normalGLMap,
    normalDXMap,
    roughnessMap,
    metalMap
  ] = useLoader(TextureLoader, [
    name("Color"),
    name("Displacement"),
    name("NormalGL"),
    name("NormalDX"),
    name("Roughness"),
    name("Metalness")
  ]);

  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 15 }}>
      <ambientLight intensity={1} color="#fff" />

      <a.spotLight
        position={[0, -1, 0.6]}
        color="#fff"
        intensity={lightIntensity}
        angle={1.5}
        penumbra={0.1}
      />
      <AnimatedLamp position-y={lampY} scale={0.005} />
      
      <AnimatedCenter scale={textScale} position={[0, -0.2, 0]} >
        <Text3D
          font="/fonts/Source_Sans_3_SemiBold_Regular.json"
          size={1.2}
          height={0.9}
          curveSegments={50}
          bevelEnabled
          bevelThickness={0.5}
          bevelSize={0.01}
          bevelOffset={0.01}
          bevelSegments={0}
          letterSpacing={-0.06}
        >
          smile
          <meshStandardMaterial
            displacementScale={0.01}
            map={colorMap}
            displacementMap={displacementMap}
            normalGLMap={normalGLMap}
            normalDXMap={normalDXMap}
            roughnessMap={roughnessMap}
            metalMap={metalMap}
            metalness={1}
          />
        </Text3D>
      </AnimatedCenter>

      <Rig />

      <Float rotationIntensity={1} floatIntensity={1} speed={0.5}>
        <Points points={
          Array.from({ length: 3000 },
          () => new THREE.Vector3().random().subScalar(0.5).multiplyScalar(10))}
        />
      </Float>
    </Canvas>
  );
};

function Rig() {
  // useFrame: 각 프레임마다 실행할 함수를 등록.
  // Three.js의 requestAnimationFrame 루프 내에서 동작
  // 애니메이션, 오브젝트의 위치/회전/크기 변경 등을 수행할 수 있음
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position, // 대상이 되는 벡터 (카메라의 위치)
      [Math.sin(-state.pointer.x) * 5, -state.pointer.y * 3.5, 15 + Math.cos(state.pointer.x) * 10], // 목표지점의 벡터(마우스 포인터의 위치)
      0.35, // 속도
      delta, // damping factor, delta: 프레임간의 시간 간격
    );
    state.camera.lookAt(0, 0, 1);
  });
};

export default Scene;