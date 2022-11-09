import { useEffect, useState } from "react"
import { useParams, } from "react-router-dom"
import { getProduct } from "../api/products"
import { UserLayout } from "../components/UserLayout"

export const Detail= () => {
    const {productId} = useParams()
    const [product, setProduct] = useState ({})
    useEffect (()=>{
        getProduct(productId). then ((data) => setProduct (data))
    },[productId])
    return <UserLayout>
                <div>
                    <p>{product.nombre}</p>
                    <p><img src={product.imagen} alt="tienda" /></p>
                    <p>{product.precio}</p>
                </div>
            </UserLayout>

};