import React, { useState ,useEffect} from "react";
// Importing React and specific hooks, useState and useEffect, for managing component state and side effects.
import Love from './Love.png'
import happy from './happy.png'
import Like from './like.png'
// Importing images to use as emoji options based on the `props.pic` value.
function EmojeeCounter(props){
console.log("pic is ",props.pic)
const [pic, setPic]=useState(Love)
 // Initializing state `pic` to store the current emoji image. Default value is `Love`.
const [count,setCount]=useState(0)
// Initializing state `count` to store the number of clicks. Default value is 0.
useEffect(()=>{
     // Using `useEffect` to run code whenever the component renders or updates.
console.log ("function called",props.pic)
if (props.pic==="Love")
 setPic(Love)
else if (props.pic==="Like")
 setPic(Like)
else if (props.pic==="happy")
 setPic(happy)
})
const ClickHandle=() =>
     // Defining the `ClickHandle` function to increment the count when the button is clicked.
 {
 setCount(count+1)
 }
 return (
    <div className="App">
     <p>{props.pic} <span></span>
     <button onClick={ClickHandle}>{count }
     <img src={pic} alt=""/>
     </button>
 </p>
</div>
)
}
export default EmojeeCounter;
// Exporting the EmojeeCounter component for use in other parts of the app.