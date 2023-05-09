// import logo from './logo.svg';
import './App.css';

//함수형
const App = () => {
  const name1 = 'YR';
  const name2 = undefined;
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* 삼항연산자 */}
      <div>
        {name1 === 'YR' ? <div>맞아요</div> : <div>틀려요</div>}
        {name1 === 'YY' ? <div>맞아요</div> : <div>틀려요</div>}
      </div>
      {/* AND 연산자(&&) : And연산자는 a && b 에서 a와 b 둘다 true일 경우에만 식이 성립 */}
      <div>
        {name1 === 'YR' && <div>YR 맞아요</div>}
        {name2 && <div>YR 틀려요</div>}
      </div>
      {/* OR 연산자(||) : OR연산자는 a || b 에서 a와 b 둘 중 하나만  true여도 식이 성립 */}
      <div>
        {name2 || <div>YR 틀려요</div>}
      </div>
    </div>
  );
}

export default App;
