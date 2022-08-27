import * as React from "react";
import axios from 'axios';
import {Navigate} from 'react-router-dom';


export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value,
            Redirect: false
        });
    }
    handleSubmit(event){
        event.preventDefault();
        const user = {
            
            username : this.state.username,
            password : this.state.password
        };
        console.log(user);
    
        axios.post(`http://localhost:8080/User/login/${this.state.username}/${this.state.password}`,user)
            .then(response => {
                alert("successful");
                localStorage.setItem("username",user.username);
           
                return response.data
               
                
             })
             .then(data => {
                console.log(data)
             })
             .then(() =>this.setState({ redirect: true }))
             
             .catch(error => {
                console.log(error.response.data.error)
                alert("wrong credentials");
             })
}
 
    render(){
        const { redirect } = this.state;
        if (redirect) {
            console.log("Yooo");
            if(this.state.username==="Sarathdgr8" & this.state.password==="1234"){
                return <Navigate to='/login/AdminDashboard'/>;
            }
            return <Navigate to="/userdashboard"></Navigate>
        }
        return(
            <form  ref="form" onSubmit={this.handleSubmit}>
                <div>
                    <h1>Login</h1><br/>
                    <div>
                        <label >UserName</label>
                         <input type="text" name="username" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="User Name"  value={this.state.username} required />
                      
                    </div>
                </div>
                <div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>
                    </div>
                </div>

                <br/>
                <div>
                    <div>
                        <button type ="submit" variant="contained">Log In</button>
                    </div>
                </div>
            </form>

        )
    }
}