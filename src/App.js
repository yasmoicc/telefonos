

import React, { useEffect, useState } from 'react';
import Viewperson from './componentes/ViewPerson';
import crud from './services/crud';

function App() {
  const [people, setPeople] = useState([])
  const [newperson, setNewpeson] = useState('')
  const [newtelefono, setNewtelefono] = useState('')
  
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(()=>{
    crud
      .getAll()
      .then(inicialP => {
        setPeople(inicialP)
      })
  }, []) 


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
    
    crud
    .create(personObject)
    .then(returnperson => {
      setPeople(people.concat(returnperson))
      setNewpeson('')
      setNewtelefono('')
    })
    
  }

  const deletetoggle = id => {    
    const personE = people.find(n => n.id === id)        
    crud
      .deleteperson(id)
      .then(returnedNote => {        
        setPeople(returnedNote)
      }) 
      .catch(error => {
        setErrorMessage(
          `Note '${personE.name}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)     
        setPeople(people.filter(n => n.id !== id))
      }) 
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

      <ul>
        {
          
          people.map(p => 
            <Viewperson 
              key={p.id}
              name={p.name}
              telefono={p.number}
              deletehandle ={()=>deletetoggle(p.id)}
            /> 
          )
          }
      </ul>
     
    </div>
  );
}

export default App;
