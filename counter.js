import React from "react";
import "./App.css";
import { useState } from "react";
function Hook_ControlledButtonState(){
    // creating a click handler function where on each click, count is increased by 1 and the new value is set into a variable setCount
    const clickHandle=()=>{
        setCount(count+1);

    }
    const [count, setCount]=useState(0);
    return (
        // creating a form
        <div className="App-header">
        <form> 
        <h1>Click Counts are {count}</h1>
         <button type= "button" onClick={clickHandle}>Click me{count}
             </button>
        </form>
        </div>
 );
}
export default Hook_ControlledButtonState;
        
