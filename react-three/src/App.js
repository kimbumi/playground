import { useState } from 'react';
import Clicker from './Clicker'

export default function App() {
  const [hasClicker, setHasClicker] = useState(true)
  const toggleClick = () => {
    setHasClicker(!hasClicker)
  }

  return (
    <>
      <button onClick={toggleClick}>{hasClicker ? "Hide":"Show"}</button>
      { hasClicker ? 
      <>
        <Clicker clickerName="a" color="red"/> 
        <Clicker clickerName="b" />
        <Clicker clickerName="c" /> 
      </> 
      : null}
    </>
  );
}
