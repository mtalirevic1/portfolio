/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {GroupProps} from "@react-three/fiber";


type GLTFResult = GLTF & {
    nodes: {
        Mike: THREE.SkinnedMesh
        Body: THREE.Bone
        FootL: THREE.Bone
        FootR: THREE.Bone
    }
    materials: {
        Mike_Texture: THREE.MeshBasicMaterial
    }
}

export type ActionName =
    | 'Dance'
    | 'Death'
    | 'Hello'
    | 'HitRecieve_1'
    | 'HitRecieve_2'
    | 'Idle'
    | 'Jump'
    | 'Kick'
    | 'No'
    | 'Pickup'
    | 'Punch'
    | 'Run'
    | 'Run_Holding'
    | 'Shoot'
    | 'SwordSlash'
    | 'Walk'
    | 'Walk_Holding'
    | 'Yes'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

interface CharacterProps extends GroupProps{
    animation: ActionName
}

export const Character = (props: CharacterProps) => {
    const {animation} = props
    const group = useRef<THREE.Group>(null)
    const { nodes, materials, animations } = useGLTF('/models/Mike.gltf') as GLTFResult
    const { actions} = useAnimations(animations, group)
    const charActions = actions as GLTFActions
    useEffect(() => {
        charActions[animation]?.reset().fadeIn(0.24).play();
        return () => {
            charActions?.[animation]?.fadeOut(0.24);
        }
    }, [animation, charActions]);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="RobotArmature">
                    <skinnedMesh
                        name="Mike"
                        geometry={nodes.Mike.geometry}
                        material={materials.Mike_Texture}
                        skeleton={nodes.Mike.skeleton}
                        castShadow
                        receiveShadow
                    />
                    <primitive object={nodes.Body}/>
                    <primitive object={nodes.FootL}/>
                    <primitive object={nodes.FootR}/>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/Mike.gltf')
