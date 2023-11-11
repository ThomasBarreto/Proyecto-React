import { CartWidget } from './CartWidget'
import './Nav.modules.css'
import './CartWidget.modules.css'
import imagen2 from '/img/logo2.png';
import { Link } from 'react-router-dom';

export const Nav = () => {
return (
    <div className='navBar'>
        <div className='containerLogoCart'>
            <Link to={'/Inicio'}> <img className='logo' src={imagen2} alt="Logo Marca" /> </Link>
            <CartWidget />
        </div>
        <ul className='list'>
            <Link className='link' to={'/Inicio'}>
                <button className='inicio'>Inicio</button> 
            </Link>
            <Link className='link' to={'/Categoria/Sneakers'}>
                <button className='sneakers' >Sneakers</button> 
            </Link>
            <Link className='link' to={'/Categoria/Indumentaria'}>
                <button className='indumentaria' >Indumentaria</button> 
            </Link>
            <Link className='link' to={'/Favoritos'}>
                <button className='favoritos' >Favoritos</button> 
            </Link>
        </ul>
    </div>
)
}
