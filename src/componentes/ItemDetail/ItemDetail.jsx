import { Link } from "react-router-dom";
import ItemCount from "../Counter/ItemCount"
import { useCartContext } from "../context/CartContext";
import { useState } from "react";

const ItemDetail = ({product})=>{
  const [isInCount,setIsInCount]=useState (true)
  const {agregarCarrito} = useCartContext()

  const onAdd = (count) => {
    agregarCarrito({...product,count })
    setIsInCount(false)
  }

  return(
    <div className="row container w-50 text-center card-body m-4">
      <h2>Vista de detalle</h2>
      <div className="col">
        <img className="w-25" src={product.imageUrl} alt="imagen"/>
        
        <div>
          <p>Nombre: {product.name}</p> 
          <p>Descripción: {product.description}</p> 
          <p>Precio: {product. price}</p> 
          <p>Stock: {product.stock}</p> 
        </div>
      </div>

      {isInCount ?
        <Link to = {"/"}>    
          <button className="btn btn-outline-success" >Seguir comprando</button>
        </Link>
      :
        <>
          <Link to = {"/cart"}>    
            <button className="btn btn-outline-warning" >Ir al Carrito</button>
          </Link>
        </>
      }

      <ItemCount initial = {1} stock={product.stock} onAdd={onAdd}/>
    </div>
  )
}
export default ItemDetail