import {OrbitControls, Stage} from "@react-three/drei";


const Experience = () => {
    return (
        <>
            <color attach="background" args={['skyblue']}/>
            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9}/>
            <Stage
                intensity={0.5}
                preset="rembrandt"
                adjustCamera={1}
                environment="studio"
            >
                <mesh castShadow receiveShadow position={[2, 0, 2]}>
                    <meshStandardMaterial/>
                    <boxGeometry/>
                </mesh>
            </Stage>
        </>
    )
}

export default Experience