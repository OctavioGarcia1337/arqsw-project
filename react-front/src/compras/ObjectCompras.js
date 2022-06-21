import React from "react";

export const ObjectCompras =(
    {
    id,
    monto_final,
    fecha,
    id_user
    
})=>{
    return(
        <div>
        <a href="#">
        </a>
            <div>
                <p>Ticket N.{id}    |   Fecha: {fecha}  |   Usuario: {id_user}</p>
                <p>Total: ${monto_final}</p>
            </div>
        </div>
    )
}