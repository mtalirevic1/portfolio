import {Character} from "./Character.tsx";
import {OrbitControls} from "@react-three/drei";

const Experience = () => {
    return (
        <>
            <color attach="background" args={['skyblue']}/>
                <Character position={[0, 0, 0]} />
                <ambientLight />
                <OrbitControls />
        </>
    )
}

export default Experience
