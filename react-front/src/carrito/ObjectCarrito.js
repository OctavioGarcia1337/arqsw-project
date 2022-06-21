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
            <button>
                Eliminar
            </button>
        </div>
        </div>
    )
}