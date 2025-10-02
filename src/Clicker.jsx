import React  from "react";

function Clicker(){
 const handleClick = ()=>{
    alert("button clicked");
 }

 return(
   <div> 
      <button onClick={handleClick}>clicked</button>
   
   </div>
 );
}

export default Clicker 






