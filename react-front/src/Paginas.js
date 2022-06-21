import React from "react"
import {Routes, Route} from "react-router-dom";
import {Login} from "./login/Login"
import {Home} from "./home/Home"
import {Productos} from "./productos/Productos"
import {Carrito} from "./carrito/Carrito"
import {Compras} from "./compras/Compras"

export const Paginas = ()=>{
    return(
        <section>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/products" exact element={<Productos/>} />
          <Route path="/carrito" exact element={<Carrito/>} />
          <Route path="/compras" exact element={<Compras/>} />
        </Routes>  
        </section>
    )
} 