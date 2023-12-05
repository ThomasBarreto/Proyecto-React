
import './Card.modules.css';
import './ItemListContainer.modules.css'
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { query, getDocs, doc, collection, where } from 'firebase/firestore'
import { db} from '../../config/firebaseConfig'
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ }) => {

    const { categoria } = useParams();
    const [products, setProducts] = useState([]);
    

    const getProductsDb = ( categoria ) =>{
        const myProds = categoria
        ? query(collection(db, "products"), where("categoria", "==", categoria))
        : query(collection(db, "products"));
        getDocs(myProds)
        .then( resp =>{
            const prods = resp.docs.map( (doc) =>( {id : doc.id, ...doc.data() } ) )
            setProducts(prods)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    useEffect(() => {
        getProductsDb(categoria)
    }, [categoria])
    

    return (
        <>
        <div className="itemListContainer">
            {products.length == 0 ? (
            <p>Loading...</p>
            ) : (
            <Card products={products}/>
            )}
        </div>
        </>
    );
};