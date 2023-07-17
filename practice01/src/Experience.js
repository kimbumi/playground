import { useFrame, useThree, extend } from "@react-three/fiber"
import { useRef } from "react"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

extend({OrbitControls})

export default function Experience() {
  useFrame((state, delta)=>{
    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
  })
  const cubeRef = useRef()
  const groupRef = useRef()


  const threeState = useThree()

  return <>
    <orbitControls args={[threeState.camera, threeState.gl.domElement]}/>
    <group ref={groupRef}>
      <mesh  scale={2} position-x={2} >
        <boxGeometry/>
        <meshBasicMaterial color="blue"/>
      </mesh>
      <mesh ref={cubeRef} scale={1} position-x={-2} >
        <boxGeometry/>
        <meshBasicMaterial color="red"/>
      </mesh>
    </group>
    <mesh rotation-x={Math.PI/-2} position-y={-1}>
        <planeGeometry args={[10,10]}/>
        <meshBasicMaterial color="greenyellow"/>
    </mesh>
  </>
}
