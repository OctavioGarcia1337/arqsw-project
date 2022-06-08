import React,{ useState} from "react"
import Home from "../home/Home"
import "./login-css.css"

export function Login(){
    const[user,setUser]= useState("");
    const[password,setPassword] = useState("");

    const onChangeUser =  (user)=>{
        setUser(user.target.value);
        
    }
    
    const onChangePas = (password)=>{
    setPassword(password.target.value)};

    
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        
        body: JSON.stringify({user : user, password : password })
    };

    const login = async()=>{
        fetch('http://localhost:8090/login',requestOptions)
        .then(response => {if (response.status === 400) {
           alert("error 400 user not found")
        } else{
            console.log(response.json());
            window.location.replace('/home');
            
        }})
        
    };
   
    const handleSubmit= (event)=>{
        event.preventDefault();
        login();

    };

    return(
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input id="user" type={"text"} placeholder="user" onChange={onChangeUser} value ={user} required></input>
        <input id="password" type={"password"} placeholder="password" onChange={onChangePas} value={password} required></input>
        <input type="submit" value="ingresar"></input>
        </form>


    );


}