
import React from "react";
import './../styles/App.css';
import { useState } from "react/cjs/react.production.min";

const App = () => {
  const [input, setInput] = useState(0)
  const handleClick = ()=>{
    setInput(input+1);
  }
  
    return (
      <div>
          <p>Button clicked {input} times</p>
          <button onClick={handleClick}>Click me</button>
      </div>
    )
  }

export default App
