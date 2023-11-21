import { useEffect, useState } from "react";
import { createContext } from "react";


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


    //objeto provider
    const objetProvider = {
        cart,
        handleAddToCart,
        handleDeleteToCart,
    }
    //Return del createContext.provider
    return <CartContext.Provider value={objetProvider} >{children}</CartContext.Provider>

}
