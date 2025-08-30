import React,{useState} from "react";
const Btn=()=>{
    const [color,setColor]=useState('Black');
    const[text,setText]=useState('date');
    const [obj,setObj]=useState( {
        fName:'Abubakar',
        lName:'Aslam',

    })
    
    return(
        <div>
            <h1 style={{color:color}}>ABUBAKAR ASLAM  </h1>
            <button type="button" onClick={()=>setColor('Blue')}>Change color</button>
            <h1> {text}</h1>
            <button type="button" onClick={()=>setText()}>Change date</button>


    
        </div>
    )
}
export default Btn;

