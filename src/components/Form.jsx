import React, {useState} from 'react'
import axios from "axios";
const Form = (props) => {
  const [name,setName]= useState("");
  const [yourClass, setYourClass]=useState("");
  return (
    <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          const student = {"name":name,"yourClass":yourClass}
          axios.post("http://localhost:8080/api/students/add",student).then(response=>console.log(response)).catch(err=>console.log(err))
          axios.get("http://localhost:8080/api/students/getAll").then(response=>props.setStudent(response.data))
          setName("");
          setYourClass("");
        }}>
            Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br />
            <br />
            Class: <input type="text" value={yourClass} onChange={(e)=>{setYourClass(e.target.value)}}/>
            <br />
            <br />
            <button style={{color:"white",backgroundColor:"deeppink"}}>create</button>
        </form>
    
    </div>
  )
}

export default Form