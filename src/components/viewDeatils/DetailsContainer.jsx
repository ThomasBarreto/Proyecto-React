import React, { useEffect, useState } from 'react';
import { Details } from './Details';
import './Details.modules.css';
import { getProducts } from '../../asyncMock';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

export const DetailsContainer = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
    const fetchProducts = async () => {
        try {
        const result = await getProducts();
        setProducts(result);
        } catch (error) {
        console.error('Error fetching products:', error.message);
        }
    };

    fetchProducts();
    }, []);
    
    useEffect(() => {
        const selectedProd = products.find((prod) => prod.id === parseInt(id));
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