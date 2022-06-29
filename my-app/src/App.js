import logo from './logo.svg';
import './App.css';
import Info from "./components/Info";

// here also possible
//let name = "Mino"

function App(props) {

  const dyn = "Yeeees";

  return (
    <div className="App">
      <header className="App-header">
        <Info />
        <p>Test aus {props.nameFromProps}</p>
        <p>Dynamic content?&nbsp;&nbsp;&nbsp; {dyn}</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
