/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MugshotScenev8(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mugshot_scenev8.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.second_light.geometry}
        material={materials['Material.001']}
        position={[7.02, 8.56, 19.94]}
        scale={[0.02, 0.09, 0.02]}
      />
      <mesh
        geometry={nodes.third_light.geometry}
        material={materials['Material.004']}
        position={[7.02, 8.56, 29.51]}
        scale={[0.02, 0.09, 0.02]}
      />
      <mesh
        geometry={nodes.poster2.geometry}
        material={materials['poster2.002']}
        position={[20.18, 5.24, 35.73]}
        scale={[-0.09, 2.39, 2.01]}
      />
      <mesh
        geometry={nodes.poster1.geometry}
        material={materials['poster2.001']}
        position={[20.18, 5.24, 3.88]}
        scale={[-0.09, 2.39, 2.01]}
      />
      <mesh
        geometry={nodes.jailbg.geometry}
        material={materials.jailThing}
        position={[0.01, 5.17, 20.54]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[15.62, 2.92, -0.07]}
      />
      <mesh
        geometry={nodes.second_light001.geometry}
        material={materials['Material.002']}
        position={[7.02, 8.56, 10.31]}
        scale={[0.02, 0.09, 0.02]}
      />
      <group scale={[0.98, 0.98, 1]}>
        <mesh geometry={nodes.Floor_1.geometry} material={materials.Floor_grout} />
        <mesh geometry={nodes.Floor_2.geometry} material={materials.Floor_tiles_alt1} />
        <mesh geometry={nodes.Floor_3.geometry} material={materials.Floor_tiles_alt2} />
        <mesh geometry={nodes.Floor_4.geometry} material={materials.Floor_tiles_alt3} />
        <mesh geometry={nodes.Floor_5.geometry} material={materials.Floor_tiles_alt4} />
        <mesh geometry={nodes.Floor_6.geometry} material={materials.Floor_tiles_alt5} />
        <mesh geometry={nodes.Floor_7.geometry} material={materials.Floor_tiles_alt6} />
      </group>
      <mesh geometry={nodes.Wall.geometry} material={materials.Wall2_outside} position={[0, 0, 39.8]} />
      <group position={[0, 0, 19.82]}>
        <mesh geometry={nodes.Roof_1.geometry} material={materials.Roof_sheeting} />
        <mesh geometry={nodes.Roof_2.geometry} material={materials.Roof_rakes} />
        <mesh geometry={nodes.Roof_3.geometry} material={materials.Roof_eaves} />
        <mesh geometry={nodes.Roof_4.geometry} material={materials.Roof_ridge} />
        <mesh geometry={nodes.Roof_5.geometry} material={materials.Roof_rafter} />
        <mesh geometry={nodes.Roof_6.geometry} material={materials.Roof_valley} />
        <mesh geometry={nodes.Roof_7.geometry} material={materials.Roof_hip_black} />
        <mesh geometry={nodes.Roof_8.geometry} material={materials.Roof_tiles_black} />
        <mesh geometry={nodes.Roof_9.geometry} material={materials.Roof_tiles_black2} />
        <mesh geometry={nodes.Roof_10.geometry} material={materials.Roof_tiles_black3} />
        <mesh geometry={nodes.Roof_11.geometry} material={materials.Roof_tiles_black4} />
      </group>
      <mesh geometry={nodes.Window.geometry} material={materials.glass} position={[0, 0, 39.8]}>
      <meshStandardMaterial 
            transparent={true}
            opacity={0.5}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/mugshot_scenev8.glb')