export default function Experience() {
  return <>
    <mesh scale={2} position-x={Math.PI * 0.5}>
        <sphereGeometry args={[1,32,32]}/>
        <meshBasicMaterial color="hotpink"/>
    </mesh>
  </>
}
