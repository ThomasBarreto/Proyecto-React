import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { collection, doc, getDoc, serverTimestamp, updateDoc, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { Brief } from './brief';
import './Checkout.modules.css';

const Checkout = () => {
    const { cart, finalizarCompra } = useContext(CartContext);

    const handleCheckout = async () => {
        try {
            // Crear objeto de datos de la orden
            const orderData = {
                items: cart.map(item => ({
                    id: item.id,
                    cantidad: item.cantidad,
                    precio: item.precio,
                })),
                total: cart.reduce((total, item) => total + item.cantidad * item.precio, 0),
                fecha: serverTimestamp(),
            };

            // Agregar orden a la colección "orders"
            const ordersRef = collection(db, 'orders');
            const newOrderRef = await addDoc(ordersRef, orderData);

            // Obtener el ID de la nueva orden
            const orderId = newOrderRef.id;
            console.log('ID de la nueva orden:', orderId);

            // Actualizar el stock
            await Promise.all(cart.map(item => actualizarStock(item.id, item.cantidad)));

            finalizarCompra();

            Swal.fire({
                title: 'Compra Finalizada',
                html: `¡Gracias por tu compra! Tu ID de orden es: <strong>${orderId}</strong>`,
                icon: 'success',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: 'Copiar ID',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Copiar al portapapeles
                    navigator.clipboard.writeText(orderId);
                    Swal.fire('ID copiado', '', 'success');
                }
            });
            
            // Swal.fire({
            //     title: 'Compra Finalizada',
            //     text: `¡Gracias por tu compra! Tu ID de orden es: ${orderId}`,
            //     icon: 'success',
            //     confirmButtonText: 'Ok',
            // });
        } catch (error) {
            console.error('Error al finalizar la compra:');
        }
    };

    const actualizarStock = async (productId, cantidadComprada) => {
        try {
            const productsRef = doc(db, 'products', productId);

            const obtenerProductoDesdeDB = await getDoc(productsRef);


            if (obtenerProductoDesdeDB.exists()) {
                const currentStock = obtenerProductoDesdeDB.data().stock;
                const newStock = currentStock - cantidadComprada;
                await updateDoc(productsRef, { stock: newStock });
            } else {
                console.error(`El producto con ID ${productId} no existe.`);
            }
        } catch (error) {
            console.error('Error al actualizar el stock:');
        }
    };

    return (
        <div className="checkoutContainer">
            <div>
                <Brief cart={cart} total={cart.reduce((total, item) => total + item.cantidad * item.precio, 0)} />
            </div>
            <button className="buttonBrief" type="button" onClick={handleCheckout}>
                Finalizar Compra
            </button>
        </div>
    );
};

export default Checkout;
