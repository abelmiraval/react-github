import logo from './logo.svg';
import './App.css';
import User from './user'
import { useState } from 'react'

function Header({children}){
  return (
    <header>
      <h3>Esto es un header bonito</h3>
      {children}
    </header>
  )
}

function App() {

  const  [counter, setCounter] = useState(0)

  function handleSubmit(event){
    event.preventDefault()
    console.log('submit')
  }


  return (
    <div className="App" onClick={()=> {
      setCounter(counter + 1)
    }}>

      <Header>
        <ul>
          <li>
            <a href='#'>Link 1</a>
          </li>
        </ul>
      </Header>

      <User color="purple" counter={counter} name="La naturaleza" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3TnikLSSqhYYwqm2a9J5QHpCtg3Uhejp_Q&usqp=CAU"></User>

      <form action="" onSubmit={handleSubmit}>
        <input type="text"/>
        <input type="text"/>
        <input type="submit"/>
      </form>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola mundo</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
