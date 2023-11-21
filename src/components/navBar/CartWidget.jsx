
import { useContext } from 'react';
import './Nav.modules.css';
import { CiShop } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const {cart} = useContext(CartContext)
    return (
        <> 
            <div className='containerCartWidget' >
                <Link className='cartWidget' to={'/Carrito'}><CiShop/></Link>
                <p>{cart.length}</p>
            </div>
        </>
    )
}
