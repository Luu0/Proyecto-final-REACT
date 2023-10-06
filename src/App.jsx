import { useState,useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailCointainer';
import CartContainer from './componentes/CartContainer/CartContainer'
import { CartContextProvider } from './componentes/context/CartContext'


function App() {
  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            
            <Route path='/category/:cid' element={<ItemListContainer/>}/>
            
            <Route path='/detalles/:pid' element={<ItemDetailContainer/>}/>

            <Route path='/cart' element = {<CartContainer/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
