import React,{ useState} from "react"
import "./login-css.css"  

function SLocalStorage(idR, LoggS){
    localStorage.setItem("isLogged", LoggS);
    localStorage.setItem("loggedID", idR);
}

export function Login(){
    SLocalStorage(0, 0);
    const[user,setUser]= useState("");
    const[password,setPassword] = useState("");
    let id;
    const onChangeUser =  (user)=>{
        setUser(user.target.value);
    }
    
    const onChangePas = (password)=>{
    setPassword(password.target.value)};

    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        
        body: JSON.stringify({id_user : id, user : user, password : password })
    };

    const login = async()=>{
        fetch('http://localhost:8090/login',requestOptions)
        .then(response => {if (response.status === 400) {
           alert("error 400 user not found")
        } else{
            console.log(response.json());
            SLocalStorage(3, 1); //el uno significa que se logro loggear, el 3 es la id del benja hardcodeada.
            window.location.replace('/home');
        }})
        
    };
   
    const handleSubmit= (event)=>{
        event.preventDefault();
        login();

    };

    return(
        <form onSubmit={handleSubmit} id="close-login-form">
        <h1 class="loginh1">Login</h1>
        <div>
        <input class="btn" id="user" type={"text"} placeholder="user" onChange={onChangeUser} value ={user} required></input>
        <input class="btn" id="password" type={"password"} placeholder="password" onChange={onChangePas} value={password} required></input>
        </div>
        <div>
        <input class="buttons btn-15" type="submit" value="ingresar"></input>
        </div>
        
        </form>
    );
    

}