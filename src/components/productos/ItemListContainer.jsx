import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Button } from "../button/Button";
import './Card.modules.css';
import './ItemListContainer.modules.css'
import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { getProducts } from "../../asyncMock";
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({ message }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const result = await getProducts();
            const filteredProducts = categoria
            ? result.filter(product => product.categoria.toLowerCase() === categoria.toLowerCase())
            : result;
            setProducts(filteredProducts);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error.message);
            setLoading(false);
        }
        };
    
        fetchData();
    }, [categoria]);
    return (
        <>
        <div className="itemListContainer">
            {loading ? (
            <p>Loading...</p>
            ) : (
            <Card products={products} loading={loading}/>
            )}
        </div>
        </>
    );
};