import { useContext, useState } from 'react'
import './CartContainer.modules.css'
import { CartContext } from '../../context/CartContext'
import { CiTrash } from 'react-icons/ci'

export const CartContainer = () => {

const { cart, handleDeleteToCart,handleAddToCart } = useContext(CartContext)

const increment = (product) => {
    handleAddToCart(product);
};

const decrement = (product) => {
    if(product.cantidad > 1){
        handleDeleteToCart(product);
    }
};

const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.cantidad * product.precio;
}, 0)

return (

    <>
    {cart == 0 ? <h2 style={{margin:'0 auto'}}>El carrito esta Vacio...</h2> : 

        <div className='cartContainer'>
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
                        <button className='trashIcon' onClick={() => handleDeleteToCart(product)}><CiTrash/></button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <p>Total ${totalPrice}</p>
            </div>
        </div>
    }
    </>
    );
}
