import sneakers from "./ItemListContainer"
import  "./Card.modules.css"
import { CiShoppingCart } from "react-icons/ci"

export const Card = () => {

    const addToCart = () => {
        console.log('Hiciste Click en el Carrito');
    }


return (
    <>
        <div className="mainProds">
            {sneakers.map((sneaker, index) => (
                <div className="container" key={index}>
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
