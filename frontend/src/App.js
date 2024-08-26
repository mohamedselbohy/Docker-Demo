import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
function App() {
  const [msg,setMsg] = useState("");
  useEffect(()=>{
    fetch("http://localhost:4000/api/get").then(res=>res.json()).then(data=>setMsg(data.msg)).catch((err)=>alert(err));
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{msg}</h1>
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
