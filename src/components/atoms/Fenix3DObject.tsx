
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
export function Fenix3DObject(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Model3D/scene.gltf')
  const { actions } = useAnimations(animations, group)
  // const action = actions?['Take 001']

  useEffect(() => {
    const action = actions['Take 001']
    if (action) {
      action.reset().fadeIn(0.5).play()
      action.setLoop(THREE.LoopRepeat) // 🔁 loop forever
    }
    return () => {
      if (action) action.fadeOut(0.5)
    }
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.625, 0, -17.137]}
          rotation={[-Math.PI / 2, 0, 0.053]}>
          <group name="5f59736c86d4457fa045aec4aea6b7e0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.MatI_Ride_FengHuang_01a}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.MatI_Ride_FengHuang_01b}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="AMesh_Ride_FengHuang_01" rotation={[-Math.PI / 2, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Model3D/scene.gltf')