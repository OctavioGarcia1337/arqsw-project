import React, { useEffect, useState} from "react";

import {ObjectCompras } from "./ObjectCompras";
import "./Compras.css"

export const Compras = ()=>{
  let userIDLS = localStorage.getItem('loggedID');
  const [compras, setCompras] = useState([]);
  const fetchApi = async()=>{
  const response = await fetch('http://localhost:8090/order/user/' + userIDLS)
  .then((response) => response.json());
  setCompras(response);
  };

  useEffect(()=>{
  fetchApi();
  },[])

  return(
    <>
      <h1 className="productosh1"> Lista de Compras</h1>              
      <div className="productos"> 
      {
        compras.map(compras =>(
          <ObjectCompras key={compras.id}
          id={compras.id_order}
          monto_final={compras.monto_final}
          id_user={compras.id_user}
          fecha={compras.fecha}
          order_details={compras.order_details}
          />  
        ))
      }
      </div>
    </>
  )
}