
import {BsWhatsapp} from 'react-icons/bs'
import { Nav } from './components/header/Nav'
import './App.css'
import { ItemListContainer } from './components/productos/ItemListContainer'

export const App = () => {
  return (
    <>
      <a className='wpp' href="https://web.whatsapp.com/" target='blank'> < BsWhatsapp/> </a>
      <Nav />
      <ItemListContainer message=' Nuestros Sneakers' />
    </>
  )
}
