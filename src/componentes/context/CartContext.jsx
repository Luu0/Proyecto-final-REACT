import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones del contexto
    const [cartList, setCartList] = useState([])

    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)

    const agregarCarrito = (newProduct)=>{
        // lógica  para evitar duplicados
        // 1 - existe el producto         
        // findIndex

        const index = isProduct(newProduct.id) 
        // console.log(index)
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
    const cantidadTotal = ()=> cartList.reduce((cantidadTotal, objProduct)=> cantidadTotal += objProduct.quantity ,0)
    // precio total (()=>{}, inicializador de precio total)
    const precioTotal = () => cartList.reduce((precioTotal, objProduct)=> precioTotal += (objProduct.price * objProduct.quantity) ,0)

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





// import { createContext, useContext, useState } from "react";

// const CartContext = createContext([]);

// export const useCartContext = () => useContext(CartContext);

// const CartContextProvider = ({ children }) => {
//   const [cartList, setCartList] = useState([]);

//   const addProduct = (newProduct) => {
//     //para agrupar los productos iguales
//     const idx = cartList.findIndex(producto => producto.id == newProduct.id)
//     if (idx !== -1){
//       cartList[idx].quantity += newProduct.quantity
//       setCartList([...cartList])
//     }
//     else {
//       setCartList([
//         ...cartList,
//         newProduct
//       ])
//     }

//   }

//   const cantidadTotal = () => cartList.reduce((count, objProducto) => count += objProducto.quantity, 0)

//   const precioTotal = () => cartList.reduce((count, objProducto) => count += (objProducto.quantity * objProducto.price), 0)

//   const eliminarItem = id => setCartList(cartList.filter(product => product.id !== id))

//   const deleteCart = () =>{
//     setCartList([])
//   }

//   return (
//     <CartContext.Provider value = {{cartList, addProduct, deleteCart, cantidadTotal, precioTotal, eliminarItem}}>
//       {children}
//     </CartContext.Provider>
//   )
// }