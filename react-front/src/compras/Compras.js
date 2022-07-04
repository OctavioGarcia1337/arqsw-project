import React, {useState, useEffect} from "react";
import Cookies from "universal-cookie";
import {ObjectCompras} from "./ObjectCompras";
import "./Compras.css"

const Cookie = new Cookies();

/*
async function GetOrdersByIdUser(id) {
  return fetch('http://localhost:8090/order/user/' +id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(data => data.json())
}
*/
export const Compras = ()=>{
    
    let cookie = Cookie.get("user")
    let token;
    let id_user;
    if(cookie!=undefined){
      let array = cookie.split(",")
      token = array[1]
      id_user = array[0]
    } else{
      token = "undefined"
    }
    const [ordenes,setOrdenes]=useState([]);
    
    useEffect(() =>{
        loadOrders()
    }, [])

    const loadOrders = async () => {
      try{
        
        const res = await fetch('http://localhost:8090/order/user/' +token)
        const data = await res.json()
        setOrdenes(data)
      }
      catch(e){
        console.log(e)
      }
    }

    
    /*
      if (response.status == 400) {
        alert("No hay ninguna compra")
        window.location.replace("")
      }else{
        setOrdenes(response)
        console.log(response)
      };
      */
        return(
            <>
            <h1 className= "productosh1">MIS COMPRAS</h1>
            
            <div>
            {
                ordenes?.map(orden =>(
                    
                        <ObjectCompras key={orden.id_order}
                    id = {orden.id_order}
                    monto_final = {orden.monto_final}
                    fecha = {orden.fecha}
                    id_user = {orden.id_user}
                    order_details = {orden.order_details}
                    /> 
                    
                )
                )
            }
            </div>
              
            
            
            </>      
        )
    }
   