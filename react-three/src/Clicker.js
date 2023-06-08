import { useEffect, useState } from 'react';

export default function Clicker() {
    const [count, setCount] = useState(localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0)
    
    // useEffect(()=>{
    // },[])

    useEffect(()=>{
      localStorage.setItem("count", count)
    },[count])
  
    return (
    <>
        <div>Number of click: {count}</div>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Click</button>
    </>
  );
}
