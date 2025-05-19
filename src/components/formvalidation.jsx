import { useEffect, useState } from "react";

function FormValidation(){
    const[input,setInput]=useState('');
    const [isValid, setIsValid]=useState(false);


useEffect(()=>{
    if(input.length<5){
        setIsValid(false);
    }else{
        setIsValid(true);
    }
},[input])


    return(
        <div>
            <form action="">
                <label htmlFor="">Write Something</label>
                <input type="text" id='input' placeholder="write somethin.." onChange={(e)=>{setInput(e.target.value)}}/>
                <p><span style={isValid? {backgroundColor:'lightgreen'} : {backgroundColor:'lightpink'}}>
                    {isValid? 'Valid Input':'Not valid input'}
                    </span></p>
            </form>
        </div>
    );

}
export default FormValidation;