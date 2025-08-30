import React,{useState} from "react";

const Learn=()=>{
const [color,setColor]=useState('Black');
return(<div>
    <h1>Abubakar Aslam my faviourate color is {color}</h1>
    <button type="button" onClick={()=>setColor('Green')}>Green</button>
    <button type='button' onClick={()=>setColor('Yellow')}>Yellow</button>
    <button type='button' onClick={()=>setColor('Blue')}>Blue</button>
    <button type='button' onClick={()=>setColor('Red')}>Red</button>
</div>)
}
export default Learn;
