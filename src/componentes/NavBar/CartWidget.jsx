import carrito from "../../assets/carrito.png" 
import { useCartContext } from "../context/CartContext"

const CartWidget = ()=>{
  const {cantidadTotal} = useCartContext() 
  return(
    <div>
    {cantidadTotal()}
    <button type="button" className="btn btn-dark"><img src={carrito}></img></button>
  </div>
  )
}
export default CartWidget