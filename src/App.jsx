import React from 'react'
import {BsWhatsapp} from 'react-icons/Bs'
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
