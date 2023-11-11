import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import './Indumentaria.modules.css'


export const Indumentaria = ({prodsIndumentaria}) => {
    const addToCart = () => {
        console.log('Hiciste Click en Favoritos');
    }
    return (
        <>
        <div className="mainProds">
            {prodsIndumentaria.map((prodInd) => (
                <div className="container" key={prodInd.id}>
                    <img className='img' src={prodInd.img} alt="" />
                    <h4 className='titleCard'>{prodInd.nombre}</h4>
                    <p className='price'>${prodInd.precio}</p>
                    <button onClick={addToCart} type='submit' className='cart'><CiHeart/></button>
                    <Link to={`/Detalles/${prodInd.id}`}> <Button text='Detalles' className='details'/> </Link>
                </div>
            ))}
        </div>
        </>
    )
}
