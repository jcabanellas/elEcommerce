import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Orgánicos Argentina
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
