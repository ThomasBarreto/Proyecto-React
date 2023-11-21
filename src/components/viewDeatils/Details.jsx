import React, { useContext, useState } from 'react'
import './Details.modules.css'
import { Button } from '../button/Button'
import { CiShoppingCart } from 'react-icons/ci';
import { CartContext } from '../../context/CartContext';

export const Details = ({ id, nombre, precio, talle, img, stock, }) => {

    const { handleAddToCart } = useContext(CartContext);

    return (
    <div className='containerImgYDetalles'>
        <h1>Detalles</h1>
        <div className='containerImg'>
            <img src={img} alt="" />
        </div>
        <div className='containerDetalles'>
            <p>{nombre} </p>
            <p>${precio} </p>
            <p>Talle: {talle} </p>
            <p>Stock Disponile: {stock} </p>
        </div>
        <Button onClick={() => handleAddToCart({ id, nombre, precio, talle, img, stock,})} text={<CiShoppingCart />} className='botonComprar' />

    </div>
    )
}