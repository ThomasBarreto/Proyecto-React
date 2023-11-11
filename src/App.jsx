import {BsWhatsapp} from 'react-icons/bs'
import { Nav } from './components/header/Nav'
import './App.css'
import { DetailsContainer } from './components/viewDeatils/DetailsContainer'
import { ItemListContainer } from './components/productos/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio } from './components/inicio/Inicio'
import { CartContainer } from './components/carrito/CartContainer'
import { Favoritos } from './components/favoritos/Favoritos'
import { useState , useEffect} from 'react'
import { getProducts } from './asyncMock'

export const App = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <BrowserRouter basename="/Proyecto-React">
      <a className='wpp' href="https://web.whatsapp.com/" target='blank'> < BsWhatsapp /> </a>
      <Nav />
      <Routes>
        <Route path='/Carrito' element={<CartContainer />} />
        <Route path='/Inicio' element={<Inicio />} />
        <Route path='/Detalles/:id' element={<DetailsContainer products={products} />} />
        <Route path='/Categoria/:categoria' element={<ItemListContainer message={'Sneakers'} />} />
        <Route path='/Favoritos' element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  )
}

