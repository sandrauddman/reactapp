import { useState } from "react";

function Center(){
   const [bool, setBool]=useState(false);
    return(
        <div>
            <button onClick={handleClick}>{bool? "login": "logout"} </button>
        </div>
    );

    function handleClick(){

        setBool(!bool);
    }
}export default Center;