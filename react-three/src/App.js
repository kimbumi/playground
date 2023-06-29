import { useEffect, useState } from 'react';
import Clicker from './Clicker'

export default function App({clickerCount = 0, children}) {

  const [hasClicker, setHasClicker] = useState(true)
  const [count, setCount] = useState(localStorage.getItem("totalCount") ? parseInt(localStorage.getItem("totalCount")) : 0)

  const toggleClick = () => {
    setHasClicker(!hasClicker)
    setCount(0)
  }

  const increment = () => {
    setCount(count + 1)
  }

  useEffect(()=>{
    localStorage.setItem("totalCount", count)
  },[count])

  // const numberOfClickers = Array(clickerCount).fill(0)
  // const clickerList = numberOfClickers.map((list,index)=>{
  //   return <Clicker clickHandler={increment} key={index} clickerName={index}/>
  // })

  
  return (
    <>
      {children}
      <h2>Total count: {count}</h2>
      <button onClick={toggleClick}>{hasClicker ? "Hide":"Show"}</button>
      { hasClicker ? 
      <>
       {Array(clickerCount).fill(0).map((list, index)=>{
        return <Clicker clickHandler={increment} key={index} clickerName={index}/>
       })}
      </> 
      : null}
    </>
  );
}
