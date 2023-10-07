import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones del contexto
    const [cartList, setCartList] = useState([])

    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)

    const agregarCarrito = (newProduct)=>{
        // lógica  para evitar duplicado
        const index = isProduct(newProduct.id) 

        if (index !== -1) {
            cartList[index].quantity += newProduct.quantity 
            setCartList([...cartList])  
        } else {
            setCartList([
                ...cartList,
                newProduct
            ])            
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