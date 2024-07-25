import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputString,setInputString] = useState("");
  const [inputDelimeter,setInputDelimeter] = useState("");
  const [resultString,setResultString] = useState("")

  
  return (
    <div className="App">
       <input placeholder='Input String of Numbers' value={inputString} onChange={(e)=>{setInputString(e.target.value)}} />
       <input placeholder='Input Delimeter' value={inputDelimeter} onChange={(e)=>{setInputDelimeter(e.target.value)}} />
       <button onClick={()=>{}}>Calculate</button>
       <h2>Answer:- {resultString} </h2>
    </div>
  );
}

export default App;
