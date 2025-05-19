import { useEffect, useState } from "react";

function Window(){

    const [width, setWidth]=useState(window.innerWidth);

    useEffect(()=>{
        const handleWidth =()=>setWidth(window.innerWidth);
        window.addEventListener('resize', handleWidth);

        return ()=> {window.removeEventListener('resize',handleWidth);} ;
        
    },[]);
    return  <p>Window width: {width} px</p>
        
}
export default Window;

