import React from "react";

export const ObjectCompras =(
    {
    id,
    monto_final,
    fecha,
    order_details,
    id_user
    
})=>{
    return(
        <div>
        <a href="#">
        </a>
            <div>
                <p>Ticket N.{id}    |   Fecha: {fecha}  |   Total: ${monto_final}  |   Usuario: {id_user}</p>
                <p>Detalles: {order_details}</p>
            </div>
        </div>
    )
}