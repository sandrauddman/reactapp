import { useState } from "react";

function Form(){
    const [name, setName]=useState("");
    const [age,setAge]=useState("");

    const handleSubmitted=(event)=>{
    alert(name + " " +age+ "years old. has been submitted." )
    }
    const handleNameChange=(event)=>{
        setName(event.target.value)
        
    }
    const handleAgeChange=(event)=>{
        
        setAge(event.target.value)
    }

    return(
        <div>
            <form action="submit">
                <label>Name: 
                    <input type="text" value={name} onChange={handleNameChange} /> 
                        
                </label>
                <label >Age: 
                    <input type="textnum" value={age} onChange={handleAgeChange} /> 
                        
                </label>
                <button onClick={handleSubmitted}>Submitt</button>
            </form>
        </div>

    );

}export default Form;
