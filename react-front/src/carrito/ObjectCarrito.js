// NO TERMINADO

import React from "react";

export const ObjectCarrito =(
    {
    id,
    name,
    base_price,
    description,
    id_category
})=>{
    function Sacar(id_productoo){
        var i ;
        var Carrito_arreglo_id=localStorage.getItem("CarritoVirtual");
        var Carrito_arreglo_cantidad=localStorage.getItem("CarritoVirtualCantidad");
        for (i=0;i<Carrito_arreglo_id.length;i++) {
                if(Carrito_arreglo_id[i]==id_productoo){
                    Carrito_arreglo_cantidad[i]=Carrito_arreglo_cantidad[i]-1;
                    if(Carrito_arreglo_cantidad[i]==0){
                        Carrito_arreglo_id.slice(i, i+1);
                        Carrito_arreglo_cantidad.slice(i, i+1);
                    }
                }
            
        }
        localStorage.setItem("CarritoVirtual", Carrito_arreglo_id);
        localStorage.setItem("CarritoVirtualCantidad", Carrito_arreglo_cantidad);
        //location.reload();
    }
    return(
        <div>
        <a href="#">
        </a>
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>${base_price}</p>
            <p>Cantidad: {base_price}</p>
        </div>
        <div>
            <button Onclick="Sacar(id)">
                Eliminar Una Unidad
            </button>
        </div>
        </div>
    )
}