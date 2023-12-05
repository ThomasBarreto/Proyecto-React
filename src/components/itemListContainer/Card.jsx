import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import './Card.modules.css';


export const Card = ({ products, loading }) => {
    const addToCart = () => {
        console.log('Hiciste Click en Favoritos');
    };

    return (
        <div className="mainProds">
            {loading ? (
                <p>Loading...</p>
            ) : (
                products.map((product) => (
                    <div className="container" key={product.id}>
                        <img className="img" src={product.img} alt="" />
                        <h4 className="titleCard">{product.nombre}</h4>
                        <p className="price">${product.precio}</p>
                        <button onClick={addToCart} type="submit" className="cart">
                        <CiHeart />
                        </button>
                        <Link to={`/detalles/${product.id}`}>
                            <Button text="Detalles" className="details" />
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
};