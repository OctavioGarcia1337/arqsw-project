import React, {useEffect, useState } from "react";
import { ObjectProducto } from "../productos/ObjectProducto";
import { ObjectCategories } from "../categorias/ObjectCategories";

//import { Cookies } from "react-cookie";
async function GetProductByIdCategory(id) {
    return fetch('http://localhost:8090/productCategory/'+id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
      /*.then(data => {
          console.log(data)
      })*/
   }
function RenderStart(){
    "No hay Productos en la Categoria"    
}
export const Home =()=>{
    //const Cookie = new Cookies();    
    
    const [categorias,setCategorias] = useState([]);
    const fetchApi = async()=>{
    const response = await fetch('http://localhost:8090/category')
    .then((response) => response.json());
    setCategorias(response);
    };
    useEffect(()=>{
    fetchApi();
    },[])

    const [productos,setProductos]=useState([]);
    function Handle (id_cat) {
    //const response = GetProductByIdCategory(id_cat)
    //setProductos(response);
    //console.log(id_cat);
       };

const Render =(
    <div>
    {
            productos.map(producto =>(
              <ObjectProducto key={producto.id}
              id={producto.id}
              name={producto.name}
              base_price={producto.base_price}
              id_category={producto.id_category}
              stock={producto.stock}
              description={producto.description}
              />  
            ))
    }
    </div>
)

    return(
        <>
        <h1> CATEGORIAS</h1>
        <div>
            {
                categorias.map(categoria =>(
                  <button onClick={()=>Handle(categoria.id_category)}>
                      <ObjectCategories key={categoria.id_category}
                    
                  name={categoria.nombre}
                  description={categoria.descripcion}
                  
                  />
                  <link to= "/productos"></link>
                  </button>
                ))
            }
        </div>
        {productos? RenderStart():Render}  
        </>
    );
}
