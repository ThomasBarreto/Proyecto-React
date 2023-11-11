import React, { useEffect, useState } from 'react';
import { Details } from './Details';
import './Details.modules.css';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

export const DetailsContainer = ({ products }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProd = products.find((prod) => prod.id === parseInt(id));
        setProduct(selectedProd);
    }, [id, products]);

    return (
        <>
            <Link to={`/Categoria/${product ? product.categoria : ''}`}>
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