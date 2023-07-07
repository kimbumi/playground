import { useState, useEffect } from "react";

export default function People() {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await response.json()
    setPeople(result)
  }

  useEffect(()=>{
   getPeople() 
  },[])

  return (
    <>
      <h1>People</h1>
      <ul>
        {people.map((person, index) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </>
  );
}
