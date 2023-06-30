import { useEffect, useState } from 'react';

export default function Test() {
    const [count, setCount] = useState(0)
    console.log("Render")

    useEffect(()=>{
        console.log("Test")
      },[count])
    return (
    <>
     <button onClick={()=>{
        setCount(count+1)
        console.log(count)
     }}>Render?</button>
    </>
  );
}
