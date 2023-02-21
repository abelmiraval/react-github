import { useState } from "react";
import  style from './user.module.css'
import './user.scss'
import styled from 'styled-components'

 const Avatar = styled.img`
  border: 10px solid black;
 `

console.log();


function User({color, name, avatar, counter }) {
  const [calculatedName, setCalculatedName] = useState(name);

  const newName = `${calculatedName} es muy lindo!`;

  function onClick() {
    setCalculatedName("New name");
  }

  return (
    <div
      style={{
        borderBottom: `10px solid ${color}`,
        borderLeft: "50px solid blue",
      }}
      className="User"
      onClick={onClick}
    >
      <img className={style.avatar} src={avatar} title={name} alt={name}></img>
      <img className='avatar' src={avatar} title={name} alt={name}></img>
      <Avatar src={avatar} title={name} alt={name}></Avatar>
      <p>{newName}</p>
      <p>
        Hemos dado click en {newName} por {counter}
      </p>
    </div>
  );
}

export default User;
