import { useEffect, useState } from 'react';

export default function Clicker({clickerName,color ="blue"}) {
  const [count, setCount] = useState(localStorage.getItem(clickerName) ? parseInt(localStorage.getItem(clickerName)) : 0)
    
    useEffect(()=>{
      return () => {
        localStorage.removeItem(clickerName)
      }
    },[])

    useEffect(()=>{
      localStorage.setItem(clickerName, count)
    },[count])
  
    return (
    <>
        <div style={{color: color}}>Number of click: {count}</div>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Click</button>
    </>
  );
}
