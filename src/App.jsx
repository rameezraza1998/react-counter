import { useState } from "react";
import "./App.css";  

function App() {
  let [num, setNum] = useState(0);

  function Add() {
    console.log("add is pressed");
    setNum(num + 1);
    console.log(num);
  }
  
  function Sub() {
    console.log("minus is pressed");
    if (num > 0) {
      setNum(num - 1);
      console.log(num);
    }
  }

  return (
    <div className="app-container">
      <h1 className="title">Counter App</h1>
      <div className="counter-display">
        <h2>{num}</h2>
      </div>
      <div className="buttons">
        <button onClick={Add} className="btn add-btn">Add</button>
        <button onClick={Sub} className="btn sub-btn">Minus</button>
      </div>
    </div>
  );
}

export default App;
