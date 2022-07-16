
import axios from 'axios'
import React, { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState([])
  const [newperson, setNewpeson] = useState('')
  const [newtelefono, setNewtelefono] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/people')
      .then(response => {
        console.log(response.data)
        setPeople(response.data)
      })
  }
  
  useEffect(hook, [])

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewpeson(event.target.value)
  }
  const handletelefonoChange = (event) => {
    console.log(event.target.value)
    setNewtelefono(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newperson,
      number: newtelefono,     
      id: people.length + 1,
    }
  
    setPeople(people.concat(personObject))
    setNewpeson('')
    setNewtelefono('')
  }

  return (
    <div>
       <form onSubmit={addPerson}>
        <input 
        value={newperson}
        onChange={handlePersonChange}
        />
        <input 
        value={newtelefono}
        onChange={handletelefonoChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  );
}

export default App;
