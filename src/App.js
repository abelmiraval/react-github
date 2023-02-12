import logo from './logo.svg';
import './App.css';
import User from './user'

function Header({children}){
  return (
    <header>
      <h3>Esto es un header bonito</h3>
      {children}
    </header>
  )
}

function App() {
  return (
    <div className="App">

      <Header>
        <ul>
          <li>
            <a href='#'>Link 1</a>
          </li>
        </ul>
      </Header>

      <User></User>

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
