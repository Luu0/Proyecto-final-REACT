import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones del contexto
    const [cartList, setCartList] = useState([])

    const index = (id) => cartList.findIndex(prod => prod.id === id)

    const agregarCarrito = (newProduct) => {
        const existingProductIndex = index(newProduct.id)
        if (existingProductIndex !== -1) {
            // Si el producto ya existe, actualiza la cantidad en lugar de añadirlo nuevamente
            const updatedCart = [...cartList];
            const existingProduct = updatedCart[existingProductIndex];
            existingProduct.count += newProduct.count;
            setCartList(updatedCart);
        } else {
            // Si el producto no existe en el carrito, agrégalo
            setCartList([...cartList, newProduct]);
        }
    }
     
    // Eliminar por producto
    const eliminarProducto = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))
    // mostrar la cantidad de productos total que tienen 
    const cantidadTotal = ()=> cartList.reduce((cantidadTotal, objProduct)=> cantidadTotal += objProduct.count ,0)
    // precio total (()=>{}, inicializador de precio total)
    const precioTotal = () => cartList.reduce((precioTotal, objProduct)=> precioTotal += (objProduct.price * objProduct.count) ,0)

    const deleteCart = ()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            deleteCart,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}