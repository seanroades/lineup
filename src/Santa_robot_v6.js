/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function SantaRobot6(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/santa_robot_v6.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.waveNew.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1.08, -0.22, -0.1]} rotation={[0, 0, 0]} scale={1}>
        <primitive object={nodes.spine} />
        <group name="santahat">
          <skinnedMesh
            frustumCulled={false}
            name="Icosphere"
            geometry={nodes.Icosphere.geometry}
            material={materials['Material.013']}
            skeleton={nodes.Icosphere.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            geometry={nodes.Icosphere_1.geometry}
            material={materials['Material.011']}
            skeleton={nodes.Icosphere_1.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            geometry={nodes.Icosphere_2.geometry}
            material={materials['Material.012']}
            skeleton={nodes.Icosphere_2.skeleton}
          />
        </group>
        <group name="santa_beard">
          <skinnedMesh
            frustumCulled={false}
            geometry={nodes['000_Sphere003_Mustache_0'].geometry}
            material={materials['Mustache_65b81f73-7620-48d5-97f5-9b752d8e6f7d']}
            skeleton={nodes['000_Sphere003_Mustache_0'].skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            geometry={nodes['000_Sphere003_Mustache_0_1'].geometry}
            material={materials['Beard_3952510c-f27a-40f4-92c6-070988b59cce']}
            skeleton={nodes['000_Sphere003_Mustache_0_1'].skeleton}
          />
        </group>
        <skinnedMesh
          geometry={nodes.cleanup.geometry}
          material={materials['Material.001']}
          skeleton={nodes.cleanup.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube002.geometry}
          material={materials['Material.002']}
          skeleton={nodes.Cube002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube002_1.geometry}
          material={materials['Material.003']}
          skeleton={nodes.Cube002_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube002_2.geometry}
          material={materials['Material.007']}
          skeleton={nodes.Cube002_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube002_3.geometry}
          material={materials['Material.008']}
          skeleton={nodes.Cube002_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube002_4.geometry}
          material={materials['Material.010']}
          skeleton={nodes.Cube002_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube002_5.geometry}
          material={materials['Material.009']}
          skeleton={nodes.Cube002_5.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/santa_robot_v6.glb')
