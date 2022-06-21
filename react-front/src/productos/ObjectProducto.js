import React from "react";

export const ObjectProducto =(
    {
    id,
    name,
    base_price,
    stock,
    description,
    id_category
})=>{/*
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        
        body: JSON.stringify({user : user, password : password })
    };

    
    const Agregar = async()=>{
        fetch('http://localhost:8090/xxxx',requestOptions)
        .then(response => {if (response.status === 400) {
           alert("error 400 user not found")
        } else{
            console.log(response.json());
            window.location.replace('/home');
            
        }})
        
    };*/

    return(
        <div>
        <a href="#">
        </a>
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Stock: {stock}</p>
            <p>${base_price}</p>
        </div>
        <div>
            <button onclick="Agregar()">
                Agregar al carrito
            </button>
        </div>
        </div>
    )
}