import React, { useState } from "react"; 

function Inputbox(){
    const [text , setText] = useState(0);

    const handler = (event)=>{
        setText(event.target.value);
    };
 
    return(<div>
        <input type="text" onChange={handler} placeholder="enter your value " /> 
        <p>you typed : {text}</p>

    </div>);


}

export default Inputbox ;