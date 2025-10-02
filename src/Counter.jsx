import React, { useEffect } from "react";
import { useState } from "react";

function Counter() { 
const [count , setCount]=useState(0);

useEffect(()=>{
  console.log("component renderd", count);
})
  return (
    <div>
      <h1>users</h1>
      <button onClick={()=>{setCount(count+1)}}>click here </button>
      {count}
    </div>
  );
} 

export default Counter ;