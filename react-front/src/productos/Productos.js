import React, { useEffect, useState} from "react";
import { ObjectProducto } from "./ObjectProducto";


export const Productos = ()=>{

    const [productos,setProductos] = useState([]);
    const [prodseach,setProdsearch] = useState([]);
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
        var resultadosBusqueda=prodseach.filter((elemento)=>{
          if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
          {
            return elemento;
          }
        });
        setProductos(resultadosBusqueda);
      }

    return(
        <>
        <h1> PRODUCTOS</h1>
        <div>
        <input
          value={busqueda}
          placeholder="Escribe para buscar algun producto"
          onChange={handleChange}
        />
      </div>

        <div>
            {
                productos.map(producto =>(
                  <ObjectProducto key={producto.id}
                  id={producto.id}
                  name={producto.name}
                  base_price={producto.base_price}
                  stock={producto.stock}
                  description={producto.description}
                  />  
                ))
            }
        </div>
        </>
    )
}