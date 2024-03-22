import React from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { Center, Text3D } from '@react-three/drei';
import { TextureLoader } from "three/src/loaders/TextureLoader";

const name = (type) => `${process.env.PUBLIC_URL}/texture/Metal032_1K-JPG_${type}.jpg`;

function Text() {
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

  const { viewport } = useThree();
  const scalingFactor = Math.min(Math.max(viewport.aspect / 2, 0.7), 1.1);
  
  return (
    <Center scale={scalingFactor}>
      <Text3D
        font={`${process.env.PUBLIC_URL}/fonts/Source_Sans_3_SemiBold_Regular.json`}
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
    </Center>
  )
};

export default Text;