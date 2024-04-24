import { useState,useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data)
    })
  },[])


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

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App