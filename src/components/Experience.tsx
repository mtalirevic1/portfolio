import DraggableItem from "./DraggableItem.tsx";
import {CuboidCollider, Physics} from "@react-three/rapier";


const Experience = () => {
    return (
        <>
            <color attach="background" args={['skyblue']}/>

                <ambientLight />
                <Physics debug>
                    <DraggableItem/>

                    <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
                    <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
                </Physics>
        </>
    )
}

export default Experience