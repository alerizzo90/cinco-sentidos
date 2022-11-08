import { useEffect, useState } from "react"
import { useParams, redirect } from "react-router-dom"
import { getProduct } from "../api/products"
import { UserLayout } from "../components/UserLayout"

export const Detail= () => {
    const {productId} = useParams()
    const [product, setProduct] = useState ({})
    useEffect (()=>{
        getProduct(productId). then ((data) => setProduct (data))
    },[productId])
    return <UserLayout>{product?.nombre}</UserLayout>

};