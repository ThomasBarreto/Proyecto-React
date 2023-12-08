import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { collection, doc, getDoc, serverTimestamp, updateDoc, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { Brief } from './Brief';
import './Checkout.modules.css';
import { useState } from 'react';

const Checkout = () => {
    const { cart, finalizarCompra } = useContext(CartContext);

    // Estados para el nombre y el correo electrónico
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validarEmail = (email) => {
        // Expresión regular para validar un formato de correo electrónico básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const camposCompletos = nombre.trim() !== '' && validarEmail(email);

    const handleCheckout = async () => {
        if (!camposCompletos) {
            Swal.fire({
                title: 'Campos Incompletos',
                text: 'Por favor, complete los campos de nombre y correo electrónico en un formato válido.',
                icon: 'warning',
                confirmButtonText: 'Ok',
            });
            return;
        }else{
            try {
                // Crear objeto de datos de la orden con nombre y correo electrónico
                const orderData = {
                    nombre: nombre,
                    email: email,
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
    
            } catch (error) {
                console.error('Error al finalizar la compra:', error);
            }
        };
    }


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
            console.error('Error al actualizar el stock:', error);
        }
    };

    return (
        <>
            <div className='checkoutInput'>
                <div className="checkoutContainer">
                    <div>
                        <Brief cart={cart} total={cart.reduce((total, item) => total + item.cantidad * item.precio, 0)} />
                    </div>
                    <div className='inputContainer'>
                        <p className='datos'>Ingrese los datos al finalizar la compra</p>
                        <input
                            className='inputDatos'
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder='Nombre'
                            value={nombre}
                            onChange={handleNombreChange}
                        />
                        <input
                            className='inputDatos'
                            type="text"
                            name="email"
                            id="email"
                            placeholder='Email'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <button
                        className="buttonBrief"
                        type="button"
                        onClick={handleCheckout}
                    >
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </>
    );
};

export default Checkout;