import { useState } from 'react'



function User({name, avatar, counter}){
  const [calculatedName, setCalculatedName] = useState(name)

  const newName = `${calculatedName} es muy lindo!`

  function onClick(){
    setCalculatedName('New name')
  }

  return (
    <div className="User" onClick={onClick}>
      <img src={avatar} title={name} alt={name}></img>
      <p>{newName}</p>
      <p>Hemos dado click en {newName} por {counter}</p>
    </div>
  )
}

export default User
