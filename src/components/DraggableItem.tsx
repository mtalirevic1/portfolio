// noinspection JSVoidFunctionReturnValueUsed

import {RapierRigidBody, RigidBody} from "@react-three/rapier";
import {useRef} from "react";
import {useThree} from "@react-three/fiber";
import {useGesture} from "@use-gesture/react";
import { useSpring, a } from "@react-spring/three"
import { Vector3} from "three";

const DraggableItem = () => {
    const ref = useRef<RapierRigidBody>(null);
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width
    const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [0, 0, 0], config: { friction: 10 } }))
    const bind = useGesture({
        onDrag: ({ offset: [x, y] }) => set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
        onHover: ({ hovering }) => set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
    })
    console.log("SPRING ROT", spring.rotation.get())
    return (
        <RigidBody
            ref={ref}
            canSleep={false}
            colliders="cuboid"
            restitution={0.2}
            friction={1}
            type='dynamic'
            linearDamping={0.5}
            angularDamping={0.5}
            {...bind()}
        >
            <a.mesh
                castShadow
                receiveShadow
                onPointerDown={() => {
                    if(!ref.current) return
                    const p = new Vector3( ...spring.position.get() )
                    ref.current.setNextKinematicTranslation(p)
                }}
            >
                <boxGeometry />
                <meshStandardMaterial />
            </a.mesh>
        </RigidBody>
    );
};

export default DraggableItem;
