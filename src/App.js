import logo from './logo.svg';
import './App.css';

function App() {
  const name1 = 'YR';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <div>
        {name1 === 'YR' ? <div>맞아요</div> : <div>틀려요</div>}
      </div>
    </div>
  );
}

export default App;
