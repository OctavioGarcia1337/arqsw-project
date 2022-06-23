// NO TERMINADO

import React, { useEffect, useState} from "react";
import { ObjectProducto } from "../productos/ObjectProducto";
import { Productos } from "../productos/Productos";
import { ObjectCarrito } from "./ObjectCarrito";
import "./Carrito.css"

export const Carrito = ()=>{
  const [productos, setProductos] = useState([]);
  const [prodsearch, setProdsearch] = useState([]);
  const [busqueda, setBusqueda]= useState("");
  const fetchApi = async()=>{
  const response = await fetch('http://localhost:8090/products')
    .then((response) => response.json());
    setProductos(response);
    setProdsearch(response);
  };
    useEffect(()=>{
    fetchApi();
    },[])

      const filtrar=()=>{
        var Carrito_arreglo_id=localStorage.getItem("CarritoVirtual");
        var resultadosBusqueda=prodsearch.filter((elemento)=>{
          if(Carrito_arreglo_id.includes(elemento.id.toString()))
          {
            return elemento;
          }
        });
        setProductos(resultadosBusqueda);
      }
      
      
    return(
        <>
        <h1 class="productosh1" onload="filtrar();"> CARRITO</h1>     
        <h2 class="productosh2"> Productos</h2> 
            <button onclick="Comprar()">
                Comprar
            </button>    
            <div class="productos"> 
                {
                    productos.map(producto =>(
                        <ObjectCarrito key={producto.id}
                        id={producto.id}
                        name={producto.name}
                        base_price={producto.base_price}
                        stock={producto.stock}
                        description={producto.description}/>  
                    ))
                }
            </div>
        </>
    )

}