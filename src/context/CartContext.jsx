import { useEffect, useState } from "react";
import { createContext } from "react";
import { Link} from "react-router-dom";
import Swal from 'sweetalert2'


//createContext
export const CartContext = createContext(null);

//CreateContext Provider
export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState(()=>{
        try {
            const itemInLocalStorage = localStorage.getItem('prodInCart')
            return itemInLocalStorage ? JSON.parse(itemInLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem ('prodInCart', JSON.stringify(cart))
    }, [cart])
    

    const handleAddToCart = (product) => {
        const prodExist = cart.find((prodInCart) => prodInCart.id === product.id);
        if (prodExist) {
            const updateCart = cart.map((prodInCart) =>
            prodInCart.id === product.id ? { ...prodInCart, cantidad: prodInCart.cantidad + 1 } : prodInCart
        ); setCart(updateCart);
        Swal.fire({
            html: `
            <div style="display: flex; align-items: center; justify-content:center;">
                <img src="${product.img}" alt="${product.nombre}" style="width: 145px; height: 145px;">
                <p style="margin-left: 10px;">Agregaste ${product.nombre} al carro 🛒</p>
            </div>
        `,
        position: 'top',
        showConfirmButton: false,
        timer: 1500,
        })
        } else {
            setCart([...cart, { ...product, cantidad: 1 }]);
        }
    };


    const handleDeleteToCart = (product) => {
        const prodExist = cart.find((prodInCart) => prodInCart.id === product.id);
    
        if (prodExist) {
            if (prodExist.cantidad === 1) {
                setCart(
                    cart.filter((prodInCart) => prodInCart.id !== product.id)
                );
            } else {
                setCart((cart) => {
                    return cart.map((prodInCart) => {
                        if (prodInCart.id === product.id) {
                            return { ...prodInCart, cantidad: prodInCart.cantidad - 1 };
                        } else {
                            return prodInCart;
                        }
                    });
                });
            }
        }
    };


        const handleClearProd = (product) => {
        const prodExist = cart.find((prodInCart) => prodInCart.id === product.id);
        if (prodExist) {
            setCart(
                cart.filter((prodInCart) => prodInCart.id !== product.id)
            );
        }
    }

    const finalizarCompra = () => { 
        setCart([]);
    }

    //objeto provider
    const objetProvider = {
        cart,
        handleAddToCart,
        handleDeleteToCart,
        finalizarCompra,
        handleClearProd
    }
    //Return del createContext.provider
    return <CartContext.Provider value={objetProvider} >{children}</CartContext.Provider>

}
