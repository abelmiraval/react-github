
function onClick(){
  console.log('Hola mundo, este es un click onClick')
}

function User({name, avatar}){
  const newName = `${name} es muy lindo!`
  return (
    <div className="User" onClick={onClick}>
      <img src={avatar} title={name} alt={name}></img>
      <p>{newName}</p>
    </div>
  )
}

export default User
