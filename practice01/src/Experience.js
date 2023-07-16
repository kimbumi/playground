import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Experience() {
  useFrame(()=>{
    redCubeRef.current.rotation.y += 0.01;
  })
  const redCubeRef = useRef()
  
  return <>
    <group>
      <mesh  scale={2} position-x={2} >
        <boxGeometry/>
        <meshBasicMaterial color="blue"/>
      </mesh>
      <mesh ref={redCubeRef} scale={1} position-x={-2} >
        <boxGeometry/>
        <meshBasicMaterial color="red"/>
      </mesh>
      <mesh rotation-x={Math.PI/-2} position-y={-1}>
        <planeGeometry args={[10,10]}/>
        <meshBasicMaterial color="greenyellow"/>
      </mesh>
    </group>
  </>
}
