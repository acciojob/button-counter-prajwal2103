
import React from "react";
import './../styles/App.css';
import { useState } from "react/cjs/react.production.min";

const App = () => {
 const[count,setCount]= useState
  return (
    <div>
    <p>Button clicked {count} times</p>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increment</button>
    </div>
  )
}

export default App
