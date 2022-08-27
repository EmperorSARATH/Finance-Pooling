    import axios from "axios";
import React, { useState } from "react";
    const UserDashboard =()=>{

        const [username,setUser]=useState("");
        const [amount,setAmount]=useState(0);


        function changeUserName(event){
            setUser(event.target.value);
            console.log(username)
        }

        function changeAmount(event){
            setAmount(event.target.value);
            console.log(amount)
        }

        function handlCalc(){
            console.log("in method");
            const values={
                username:username,
                amount:amount
                
            }
            console.log(values);
            axios.post(`http://localhost:8080/User/${username}/${amount}`,values)
            .then(res=>{
                alert("success");
            }).catch(err=>{
                alert("error");
            })

        }

    return(
        <div>
            <h2>Welcome {localStorage.getItem("username")}</h2>

            <form>
                Username<input name="username" onChange={changeUserName} type="text" value={username}></input><br/>
                Amount<input name="amount" onChange={changeAmount} type="number" value={amount}></input><br/>
             <button onClick={handlCalc} >Confirm</button>
            </form>


        </div>
    );
}

export default UserDashboard;