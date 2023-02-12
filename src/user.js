function User({name, avatar}){
  const newName = `${name} es muy lindo!`
  return (
    <div className="User">
      <img src={avatar} title={name} alt={name}></img>
      <p>{newName}</p>
    </div>
  )
}

export default User
