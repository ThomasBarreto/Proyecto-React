import React, { useEffect, useState } from 'react';
import { Details } from './Details';
import './Details.modules.css';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

export const DetailsContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    

    const getProductsDb = () => {
        const myProds = query(collection(db, "products"));
        getDocs(myProds)
            .then(resp => {
                const prods = resp.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(prods);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    };

    useEffect(() => {
        getProductsDb();
    }, []);
    
    useEffect(() => {
        const selectedProd = products.find(prod => prod.id == (id));
        setProduct(selectedProd);
    }, [id, products]);
    
    return (
        <>
            <Link to={`/categoria/${product ? product.categoria : ''}`}>
                <button className='goBack'>
                    <BsArrowLeftCircle />
                </button>
            </Link>
            <div className="containerDetails">
                {product && <Details {...product} />}
            </div>
        </>
    );
}