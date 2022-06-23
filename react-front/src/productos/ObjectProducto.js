import React from "react";
import "./Productos.css"
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
    
    export function Agregar(id_productoo){
        window.alert("Sexoooo");
        var i ;
        
        var bandera=false;
        var Carrito_arreglo_id=localStorage.getItem("CarritoVirtual");
        var Carrito_arreglo_cantidad=localStorage.getItem("CarritoVirtualCantidad");
        for (i=0;i<Carrito_arreglo_id.length;i++) {
            if(Carrito_arreglo_id[i]===id_productoo){
                    Carrito_arreglo_cantidad[i]=Carrito_arreglo_cantidad[i]+1;
                    bandera=true;
                }
           
        }
        if (!bandera){
            Carrito_arreglo_id[Carrito_arreglo_id.length-1]=id_productoo
            Carrito_arreglo_cantidad[Carrito_arreglo_cantidad.length-1]=1
        }
        localStorage.setItem("CarritoVirtual", Carrito_arreglo_id);
        localStorage.setItem("CarritoVirtualCantidad", Carrito_arreglo_cantidad);
    }
    
    const handleSubmit= (event)=>{
        event.preventDefault();
        console.log("algoo");
        window.alert("Sexoooo");
        Agregar(id);

    };
   
   
    return(
        <div>
        <a href="#">
        </a>
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>${base_price}</p>
        </div>
        <div>
        <input className="buttons btn-15" type="button" value="Agregar al carrito  " onclick=' Agregar(id)' />
        <input className="buttons btn-15" type="submit" value="ingresar"></input>  
        </div>
        </div>
    )
}