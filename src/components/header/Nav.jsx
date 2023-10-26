import { CartWidget } from './CartWidget'
import './Nav.modules.css'
import './CartWidget.modules.css'
import imagen2 from '/img/logo2.png';

export const Nav = () => {
return (
    <div className='navBar'>
        <div className='containerLogoCart'>
            <a href="#"> <img className='logo' src={imagen2} alt="Logo Marca" /> </a>
            <CartWidget />
        </div>
        <ul className='list'>
            <li> <a href="#">Inicio</a> </li>
            <li> <a href="#">Sneakers</a> </li>
            <li> <a href="#">Remeras</a> </li>
        </ul>
    </div>
)
}
