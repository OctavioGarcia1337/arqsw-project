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

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }
      const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=prodsearch.filter((elemento)=>{
          if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
          {
            return elemento;
          }
        });
        setProductos(resultadosBusqueda);
      }

    return(
        <>
        <h1 class="productosh1"> CARRITO</h1>     
        <h2 class="productosh2"> Productos</h2> 
                
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