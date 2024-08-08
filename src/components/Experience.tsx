import {Environment, OrthographicCamera} from "@react-three/drei";
import {useRef} from "react";
import {Physics, RigidBody} from "@react-three/rapier";
import {CharacterController} from "./CharacterController.tsx";

const Experience = () => {
    const shadowCameraRef = useRef(null);
    return (
        <>
            <color attach="background" args={['skyblue']}/>
            <Environment preset="sunset"/>
            <directionalLight
                intensity={0.65}
                castShadow
                position={[-15, 10, 15]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.00005}
            >
                <OrthographicCamera
                    left={-22}
                    right={15}
                    top={10}
                    bottom={-20}
                    ref={shadowCameraRef}
                    attach={"shadow-camera"}
                />
            </directionalLight>
            <Physics debug>
                <RigidBody
                    colliders='cuboid'
                    position={[0, -3, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    type='fixed'>
                    <mesh receiveShadow>
                        <planeGeometry args={[1000, 1000]}/>
                        <meshStandardMaterial color="#f0f0f0"/>
                    </mesh>
                </RigidBody>
                <CharacterController/>
            </Physics>
        </>
    )
}

export default Experience
