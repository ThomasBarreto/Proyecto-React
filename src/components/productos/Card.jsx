import sneakers from "./ItemListContainer"
import  "./Card.modules.css"
import { CiShoppingCart } from "react-icons/Ci"

export const Card = () => {

    const addToCart = () => {
        console.log('Hiciste Click en el Carrito');
    }


return (
    <>
        <div className="mainProds">
            {sneakers.map((sneaker) => (
                <div className="container">
                    <img className='img' src={sneaker.img} alt="" />
                    <h4 className='titleCard'>{sneaker.nombre}</h4>
                    <p className='price'>{sneaker.precio}</p>
                    <button onClick={addToCart} type='submit' className='cart'><CiShoppingCart/></button>
                </div>
            ))}
        </div>
    </>
)
}
