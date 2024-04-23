import React from "react";
const { v4: uuidv4 } = require('uuid');

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(person =>
        <p key={uuidv4()}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons;