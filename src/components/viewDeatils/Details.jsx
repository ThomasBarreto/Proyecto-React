import React, { useState } from 'react'
import './Details.modules.css'
import { Button } from '../button/Button'
import { CiShoppingCart } from 'react-icons/ci';

export const Details = ({ nombre, precio, talle, img, stock, max = stock }) => {

    const [count, setCount] = useState(1)

    const increment = () =>{
        if(count === max){
            return count
        } setCount(count + 1)
    }
    const decrement = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };


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
        {stock > 0 ? (
        <div className='btnsContainer'>
            <button className='decrement' onClick={decrement} aria-label="Decrementar">
            -
            </button>
            <strong>{count}</strong>
            <button className='increment' onClick={increment} aria-label="Incrementar">
            +
            </button>
        </div>
        ) : (
        <p>¡Producto agotado!</p>
        )}
        <Button  text={<CiShoppingCart/>} className='botonComprar'/>
    </div>
    )
}