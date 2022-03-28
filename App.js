// import logo from './logo.sv
import React  from 'react';

import { useState } from 'react';


  export default function App() {
  
    const [simple, setsimple] = useState(" ");
  
    const [name, setname] = useState();
  
    const [fullname,setfullname]=useState();
  
    const [lastname,setlastname]=useState();
  
    const onsubmit = () => {
      setname(simple);
      setlastname(fullname);
    };

    function e(event) {
      setsimple(event.target.value);
      
    };
    
    function input(event){
      setfullname(event.target.value);
    };
  
  
    return (
      <div className="App">
     
        <h1>{name}{lastname}</h1>
        <input type="text" onChange={e} value={simple}></input>
        <br/>
        <input type="text" onChange={input} value={fullname}></input>
  
        <button onClick={onsubmit}>click me</button>
      </div>
    );
  }
  

