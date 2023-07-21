import * as THREE from 'three'
import { useMemo, useState } from 'react';

export default function CustomMesh({triangles}){
const verticesCount = triangles * 3;
const positions = useMemo(()=>{
    console.log("useMemo")
    const positions = new Float32Array(verticesCount * 3)
    for(let i = 0; i < positions.length; i++){
        positions[i] = (Math.random() - 0.5) * 2
    }
    return positions
},[triangles])



return <>
        <mesh>
            <bufferGeometry>
                <bufferAttribute 
                attach="attributes-position"
                count={positions.length / 3} 
                array={positions} 
                itemSize={3}
                 />
            </bufferGeometry>
            <meshBasicMaterial color="red" side={THREE.DoubleSide}/>
        </mesh>
    </>
}