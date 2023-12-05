import './Checkout.modules.css'

export const Brief = ({ cart }) => {

    const totalPrice = cart.reduce((accumulator, product) => {
        return accumulator + product.cantidad * product.precio;
    }, 0)

    return (
        <div className="brief">
            <h3>Resumen de la Compra</h3>
            <ul className='lista'>
            {cart.map((item) => (
                <li className='listaLi' key={item.id}>
                {item.nombre} - Cantidad: {item.cantidad} - Subtotal: ${item.cantidad * item.precio}
                </li>
            ))}
            </ul>
            <div className='totalPriceBrief'>
                <h2>Total:</h2>
                <p>
                    ${totalPrice}
                </p>
            </div>
        </div>
    );
};