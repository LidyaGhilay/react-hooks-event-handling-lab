// Code Keypad Component Here
import React from "react"
function Security (){
    const Input = () => {
        console.log("Entering password...");
    };
    
    return (
        <div>
            <input type="password" onChange={Input}></input>
        </div>
    )
}

export default Security;