import React from "react"
import {Link} from "react-router-dom";

export const Header = ()=>{
    return(
        <header>
        <ul>
            <li>
               <Link to="/home"> HOME</Link> 
            </li>
            <li>
               <Link to="/products"> PRODUCTOS</Link> 
            </li>
        </ul>
        </header>
    )
}