
// import './Nav.modules.css'
// import { CiShop } from 'react-icons/Ci';

// export const CartWidget = () => {
//     const cart = () =>{
//         console.log('Hiciste click en el carrito');
//     }
//     return (
//         <> 
//             <div className='containerCartWidget' >
//                 <a onClick={cart} className='cartWidget' href="#"><CiShop/></a>
//                 <p>1</p>
//             </div>
//         </>
//     )
// }

import React, { useState } from 'react';
import './Nav.modules.css';
import { CiShop } from 'react-icons/Ci';
import sneakers from '../productos/ItemListContainer'

export const CartWidget = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    }

    return (
        <> 
            <div className='containerCartWidget' >
                <a onClick={toggleCart} className='cartWidget' href="#"><CiShop/></a>
                <p>1</p>
            </div>

            {cartOpen && (
                <div className='cartContainer'>
                    <table>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Precio</th>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sneakers.map(product => (
                                <tr key={product.id}>
                                    <td><img style={{width:'200px'}} src={product.img} alt={product.nombre} /></td>
                                    <td><p>{product.precio}</p></td>
                                    <td><p>{product.nombre}</p></td>
                                    <td><p>{product.quantity}</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}
