
import React, { useState } from "react";
import './Prueba1.css';

async function getUserByID(id) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        user: '',
        password: ''
      })
  };
  fetch('https://localhost:8090/users/login', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
}

function Prueba1() {

  const [userData, setUserData] = useState({});
  const [isUser, setIsUSer] = useState(false);
  
  const handleSubmit = async event => {
    //Prevent page reload
    event.preventDefault();

    // Obtenemos Textos
    var {uid, upass}  = document.forms[0];

    alert(upass.value);
    // Find user login info
    const user = await getUserByID(upass.value);
    
    setUserData(user);
    setIsUSer(true);
    
  };

  
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>User ID </label>
          <input type="text" name="uid" required />
          <label>User Pass </label>
          <input type="password" name="upass" required />
        </div>
        <div className="button-container">
          <input type="submit" value="Send Request" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Pruebas Arq. Soft. {userData.name}</div>
          {isUser? <div>Usuario: {userData.name} </div> : renderForm}
      </div>
    </div>
  );
}

export default Prueba1;
