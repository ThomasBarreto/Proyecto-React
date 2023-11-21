import { BsWhatsapp } from 'react-icons/bs';
import { Nav } from './components/navBar/Nav';
import './App.css';
import { DetailsContainer } from './components/viewDeatils/DetailsContainer';
import { ItemListContainer } from './components/productos/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './components/inicio/Inicio';
import { CartContainer } from './components/carrito/CartContainer';
import { Favoritos } from './components/favoritos/Favoritos';
import { CartContextProvider } from './context/CartContext'; 

export const App = () => {
  return (
    <BrowserRouter basename="/Proyecto-React">
      <CartContextProvider>
        <a className='wpp' href="https://web.whatsapp.com/" target='_blank'> <BsWhatsapp /> </a>
        <Nav />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/carrito' element={<CartContainer />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/detalles/:id' element={< DetailsContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer message={'Sneakers'} />} />
          <Route path='/favoritos' element={<Favoritos />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};