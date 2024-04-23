import { useState } from 'react'
import React from 'react'
const { v4: uuidv4 } = require('uuid');

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', },
    { name: 'Ada Lovelace', number: '39-44-5323523', },
    { name: 'Dan Abramov', number: '12-43-234345', },
    { name: 'Mary Poppendieck', number: '39-23-6423122', }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }
    const existingName = persons.find((person) =>
      person.name === personObject.name)
    const existingNumber = persons.find((person) =>
      person.number === personObject.number)

    if (existingName) {
      alert(`${personObject.name} is already added to phonebook`)
    } else if (existingNumber) {
      alert(`${personObject.number} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person=>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input 
          value={filter}
          onChange={handleFilterChange}/>
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {filteredPersons.map(person =>
          <p key={uuidv4()}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App