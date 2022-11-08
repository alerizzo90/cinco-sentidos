import Item from "./Item";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { useParams } from "react-router-dom";

const AppContainer = () => {
    const {categoryId} = useParams();
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    useEffect (()=> {
        getProducts()
            .then (items => {setProductos (items); setLoading (false);})

    }, [categoryId])
    return (
        <div className="products">
            {loading ? <span>Cargando...</span> : null}
            
            {productos.map ((producto)=> {
                return(
                    <Item
                    key={producto.id}
                    id ={producto.id}
                    imagen={producto.imagen}
                    precio={producto.precio}
                    nombre={producto.nombre}
                    categoria={producto.categoria}
                    />
                )
            })}



        </div>

        
    )
}

export default AppContainer;