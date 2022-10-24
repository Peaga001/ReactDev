import React, { useState} from 'react'
import './PreviusState.css'

const PreviusState = () => {

  const [user, setUser] = useState([
    { id: 1, name: "João", age: 25},
    { id: 2, name: "chico", age: 28},
    { id: 3, name: "Francis", age: 32},
  ]);

  console.info(user)

  const deleteRandom = () => {
    
    const randomNumber = Math.floor(Math.random() * 4)

    /*Recebe uma função no useState*/ 
    setUser((prevUser) => {
      console.log(prevUser)
      return prevUser.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div className='App'>
        <button onClick={deleteRandom}>Remover usuário aleatório</button>
    </div>
  )
}

export { PreviusState }
export default PreviusState