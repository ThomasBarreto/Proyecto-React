import { useContext, useState } from 'react'
import './CartContainer.modules.css'
import { CartContext } from '../../context/CartContext'
import { CiTrash } from 'react-icons/ci'
import { Button } from '../button/Button'
import Checkout from '../checkout/checkout'

export const CartContainer = () => {

const { cart, handleDeleteToCart,handleAddToCart,handleClearProd } = useContext(CartContext)

const increment = (product) => {
    if (product.cantidad === product.stock) {
        console.log('No hay más stock disponible');
    } else {
        handleAddToCart(product);
    }
};

const decrement = (product) => {
    if(product.cantidad > 1){
        handleDeleteToCart(product);
    }
};

const clearProd = (product) =>{
    handleClearProd(product);
}

const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.cantidad * product.precio;
}, 0)

return (

    <>
    {cart == 0 ? <h2 style={{margin:'0 auto'}}>El carrito esta Vacio...</h2> : 
        <div className='cartContainer'>
            <div className='tableContainer'>
                <div className='tableContenido'>
                    <h2>Carrito de Compras</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((product) => (
                            <tr key={product.id}>
                            <td>
                                <img className='imgCart' src={product.img} alt={product.nombre} />
                            </td>
                            <td>{product.nombre}</td>
                            <td>${product.precio}</td>
                            <td>
                                <button className='decrement' onClick={() => decrement (product) } aria-label="Decrementar">-</button>
                                <p>{product.cantidad}</p>
                                <button className='increment' onClick={() =>increment (product) } aria-label="Incrementar">+</button>
                            </td>
                            <td>
                                <button className='trashIcon' onClick={() => clearProd(product)}><CiTrash/></button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div>
                        <p>Total ${totalPrice}</p>
                    </div>
                </div>
            </div>
            <div className='checkout'>
                <Checkout/>
            </div>
        </div>
    }
    </>
    );
}
