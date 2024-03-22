/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: LIGHTSTAR GROUP (https://sketchfab.com/LIGHT_STAR_GROUP)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/765016-loft-lightstar-pendant-lamp-a7a8d07c7e2c4e299818d29171fda7da
Title: 765016 Loft Lightstar pendant lamp
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

export default function Lamp() {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/lamp/scene.gltf`);
  const { viewport } = useThree();
  const scalingFactor = Math.min(Math.max(viewport.aspect * 0.0022, 0.0045), 0.006);

  return (
    <>
      <group position-y={2.5} scale={scalingFactor}  dispose={null}>
      <group position={[0, -164.271, 0]} scale={1.06}>
        <group position={[-39.681, 65.215, -2.213]}>
          <mesh geometry={nodes.Plafon_001_Metal_Med_0.geometry} material={materials.Metal_Med} />
          <mesh geometry={nodes.Plafon_001_Plafon_vnytri_0.geometry} material={materials.Plafon_vnytri} />
        </group>
      </group>
      <group position={[0, -169.67, 0]} rotation={[0, 0, -Math.PI]} scale={1.06}>
        <group position={[0, 1.331, 0]}>
          <mesh geometry={nodes.Bulb_E27_Standart_001_Glass_Clear_Fog_0.geometry} material={materials.Glass_Clear_Fog} />
          <mesh geometry={nodes.Bulb_E27_Standart_001_Metal_Chrome_for_Bulb_0.geometry} material={materials.Metal_Chrome_for_Bulb} />
        </group>
      </group>
      <group position={[0, 251.829, 0]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[0.119, 0.119, 0.037]}>
        <mesh geometry={nodes.Shyryp_vipyklii_001_Metal_Hrom_0.geometry} material={materials.Metal_Hrom} position={[0, 0, -769.315]} />
      </group>
      <group position={[0, 251.829, 0]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={[-0.119, 0.119, 0.037]}>
        <mesh geometry={nodes.Shyryp_vipyklii_002_Metal_Hrom_0.geometry} material={materials.Metal_Hrom} position={[0, 0, -769.315]} />
      </group>
      <group position={[0, 235.192, 5.177]} rotation={[-Math.PI, 0, 0]} scale={[0.119, 0.119, 0.037]}>
        <mesh geometry={nodes.Shyryp_vipyklii_004_Metal_Hrom_0.geometry} material={materials.Metal_Hrom} position={[0, 0, 24.184]} />
      </group>
      <mesh geometry={nodes.Cylinder001_Metal_Med_0.geometry} material={materials.Metal_Med} position={[0, 226.692, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cylinder002_Metal_Med_0.geometry} material={materials.Metal_Med} position={[0, 243.692, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Line001_Rubber_black_0.geometry} material={materials.Rubber_black} position={[0, 134.858, 0]} />
    </group>
    </>
    
  )
}

useGLTF.preload('/scene.gltf')
