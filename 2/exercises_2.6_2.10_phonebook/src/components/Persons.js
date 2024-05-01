import React from "react";
const { v4: uuidv4 } = require('uuid');

const Persons = ({ persons,handleDeletePerson }) => {
  return (
    <div>
      {persons.map(person =>
        <p key={uuidv4()}>{person.name} {person.number}
        <button onClick={()=>handleDeletePerson(person.id)}>Delete</button>
        </p>)}
    </div>
  )
}

export default Persons;