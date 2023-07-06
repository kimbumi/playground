import { useState } from "react";

export default function People() {
  const [people, setPeople] = useState([
    { name: "Bumi", id: 1 },
    { name: "John",id: 2 },
    { name: "Bob", id: 3 },
  ]);
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
