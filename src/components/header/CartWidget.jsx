
import './Nav.modules.css';
import { CiShop } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    return (
        <> 
            <div className='containerCartWidget' >
                <Link className='cartWidget' to={'/Carrito'}><CiShop/></Link>
                <p>1</p>
            </div>
        </>
    )
}
