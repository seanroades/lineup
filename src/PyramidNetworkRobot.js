/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function PyramidNetworkRobot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/pyramidNetworkRobot.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.tiredNew.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1.08, -0.22, -0.1]} rotation={[0, 0, 0]} scale={1}>
        <primitive object={nodes.spine} />
        <group name="slate">
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
            material={materials['Material.013']}
            skeleton={nodes.Cube002_4.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Cube002_5.geometry}
            material={materials['Material.012']}
            skeleton={nodes.Cube002_5.skeleton}
          />
        </group>
        <skinnedMesh
          name="Ethereum_logo"
          frustumCulled={false}
          geometry={nodes.Ethereum_logo.geometry}
          material={materials['Material.014']}
          skeleton={nodes.Ethereum_logo.skeleton}
        />
        <skinnedMesh frustumCulled={false} geometry={nodes.Cube001.geometry} material={materials.testMat} skeleton={nodes.Cube001.skeleton} />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.005']}
          skeleton={nodes.Cube001_1.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/pyramidNetworkRobot.glb')