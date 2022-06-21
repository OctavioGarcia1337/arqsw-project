import React from "react"
import {Link} from "react-router-dom";
import './Header.css';

export const Header = ()=>{
    return(
        <header class="header">
        <ul>
            <li>
               <Link to="/home"> HOME</Link> 
            </li>
            <li>
               <Link to="/products"> PRODUCTOS</Link> 
            </li>
            
            <li>
               <Link to=""> LOGIN</Link> 
            </li>
            <li>
               <Link to="/carrito"> CARRITO</Link> 
            </li>
            <li>
               <Link to="/compras"> COMPRAS</Link> 
            </li>
        </ul>
        </header>
    )
}