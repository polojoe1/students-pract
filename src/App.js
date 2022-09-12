
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Form from './components/Form';


function App() {
  const [student, setStudent]=useState([]);
  const deleteMe=(id)=>{
    console.log(id)
    axios.delete("http://localhost:8080/api/students/delete/"+id).then(response=>console.log(response)).catch(err=>console.log(err))
    axios.get("http://localhost:8080/api/students/getAll").then(response=>setStudent(response.data))
  }
  const logOff = ()=>{
    axios.get("http://localhost:8080/logout");
    window.location.href = "http://localhost:8080/";
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/api/students/getAll").then(response=>setStudent(response.data))},
    [student]);
    
  return (
    <div className="App">
      <button onClick={logOff}>Logoff</button>
      <h1>Full Stack JAVA</h1>
      <h5>Create a student and a class</h5>
      <Form setStudent={setStudent}/>
      <hr />
      
      <h5 style={{color:"blueviolet"}}>All Students and Class</h5>
      
      
        
      
      {
        student.map((el,i)=>{
          return <h5 key={i}>Name: {el.name} Class: {el.yourClass} <button style={{color:"white",backgroundColor:"black"}} onClick={()=>deleteMe(el.id)}> Delete</button></h5>
        })
      }
    </div>
  );
}

export default App;
