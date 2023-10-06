import { useContext } from "react"
import { useCartContext } from "../context/CartContext"

const CartContainer = () => {
  // const {} = useContext(CartContext)

  const {cartList, deleteCart, eliminarProducto, precioTotal} = useCartContext()

  return (
    <div>
      {cartList.map(prod => <div key={prod.id}>
          <img src={prod.imageUrl} className="w-25"/>
          {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
          <button className="btn btn-danger" onClick={ () => eliminarProducto(prod.id) }> X </button>
      </div>)}
      <button onClick={deleteCart}>Vaciar Carrito</button>
        <h3>Precio total: {precioTotal()}</h3>
    </div>
  )
}

export default CartContainer