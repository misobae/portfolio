import * as THREE from 'three';

function Points({ points }) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <points>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial
        size={0.05}
        color={0xffffff}
        opacity={0.75}
        transparent={true}
      />
    </points>
  );
}

export default Points;