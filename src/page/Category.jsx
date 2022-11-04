import { UserLayout } from "../components/UserLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProduct } from "../api/Product";

export const Category = () => {
    const {categoryId} = useParams ();
    
    useEffect (() => {
        getProduct( data => console.log(data))
    },[categoryId])

    return (
        <UserLayout>

        </UserLayout>

    );
};