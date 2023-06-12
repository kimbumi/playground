import { useState } from 'react';
import Clicker from './Clicker'

export default function App({children}) {

  const [hasClicker, setHasClicker] = useState(true)
  const [count, setCount] = useState(0)

  const toggleClick = () => {
    setHasClicker(!hasClicker)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {children}
      <h2>Total count: {count}</h2>
      <button onClick={toggleClick}>{hasClicker ? "Hide":"Show"}</button>
      { hasClicker ? 
      <>
        <Clicker clickHandler={increment} clickerName="a" color={`hsl( ${Math.random()*360}, 100%, 70%)`}/>  
      </> 
      : null}
    </>
  );
}
