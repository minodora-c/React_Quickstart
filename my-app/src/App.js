import logo from './logo.svg';
import './App.css';
import Info from "./components/Info";

// here also possible
//let name = "Mino"

function App(props) {

  const dyn = "Yeeees";
  let ort = "hier";


  async function changeName2() {
    const callApi = await fetch("https://randomuser.me/api/");
    const {results} = await callApi.json();
    this.name = results[0].name.first;
  }

  function changeName() {
    ort = "Other Person"


  }

  return (
    <div className="App">
      <header className="App-header">
        <Info />
        <p>Test von {ort}</p>
        <p>Test aus {props.nameFromProps}</p>
        <p>Dynamic content?&nbsp;&nbsp;&nbsp; {dyn}</p>
        <button onClick={changeName.bind(this)}>Change Name</button>
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
    </div>
  );
}

export default App;
