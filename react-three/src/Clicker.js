import { useState } from 'react';

export default function Clicker() {
    const [count, setCount] = useState(0)
  return (
    <>
        <div>Number of click: {count}</div>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Click</button>
    </>
  );
}
