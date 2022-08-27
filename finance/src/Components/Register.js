import "../Style/registration.css";
import {useState} from "react";
import axios from 'axios';

const Register=()=>{

 const [name,setName]=useState("");
 const [password,setPassword]=useState("");



 function handleName(event){
    setName(event.target.value);
 }

 function handlePwd(event){
    
    setPassword(event.target.value);
 }

 function handleSubmit(event){
    event.preventDefault();
    const data={
        username:name,
        password:password
     }
     console.log(data);
    axios.post(  "http://localhost:8080/User/reg",data)
    .then(response => {
        alert("successful");
        
     }).catch(error => {
    
        alert("Erorr");
     });
     setName("");
     setPassword("");
 }
    return(
        <div className="reg">
            <h3>Registration</h3>
            <form className="form" onSubmit={handleSubmit}>

                Name<input type="text"  name="username" onChange={handleName} value={name}></input><br/>
                password<input type="password" name="password"  onChange={handlePwd} value={password}></input><br/>
               <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;