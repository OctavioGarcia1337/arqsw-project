import React,{ useState} from "react"
import "./login-css.css"  
import {useNavigate} from "react-router-dom"

function SLocalStorage(idR, LoggS){
    localStorage.setItem("isLogged", LoggS);
    localStorage.setItem("loggedID", idR);
}

export function Login(){
    let navigate = useNavigate();
    SLocalStorage(0, 0);
    const[user,setUser] = useState("");
    const[password,setPassword] = useState("");
    const[log] = useState("");

    const onChangeUser =  (user)=>{
        setUser(user.target.value);
    }
    
    const onChangePas = (password)=>{
    setPassword(password.target.value)};

    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        
        body: JSON.stringify({id_user : log, user : user, password : password })
    };

    const login = async()=>{
        fetch('http://localhost:8090/login',requestOptions)
        .then(response => response.json()).then(data => {
            let id = JSON.stringify(data.id_user);
            SLocalStorage(id, 1); 
            navigate("home")

        }).catch(err => console.log(err))
        
    };
    
   
    const handleSubmit= (event)=>{
        event.preventDefault();
        
        login();

    };

    return(
        <form onSubmit={handleSubmit} id="close-login-form">
            <div className="cuadrado">
                <h1 className="loginh1">Login</h1>
                <div>
                    <input className="btn" id="user" type={"text"} placeholder="user" onChange={onChangeUser} value ={user} required></input>
                    <input className="btn" id="password" type={"password"} placeholder="password" onChange={onChangePas} value={password} required></input>
                </div>
                <div>
                    <input className="buttons btn-15" type="submit" value="ingresar"></input>
                </div>
            </div>
        </form>
    );
    
}


