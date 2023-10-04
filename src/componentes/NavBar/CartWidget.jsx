import carrito from "../../assets/carrito.png" 

const CartWidget = ()=>{
  return(
    <div>
    <button type="button" className="btn btn-dark"><img src={carrito}></img></button>
  </div>
  )
}
export default CartWidget