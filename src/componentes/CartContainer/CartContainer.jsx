import { useContext, useState } from "react"
import { useCartContext } from "../context/CartContext"
import{addDoc, collection, getFirestore} from "firebase/firestore"



const CartContainer = () => {

  const [dataForm,setDataForm]=useState({
    name:"",
    phone:"",
    email:""
  })
  const {cartList, deleteCart, eliminarProducto, precioTotal} = useCartContext()

  const handleAddOrder = async (evt)=>{
    evt.preventDefault()
    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(prod=>{
      return {id:prod.id, name:prod.name, price:prod.price, quantity:prod.count}
    })
    order.total = precioTotal()
    const queryDB = getFirestore()
    const ordersCollection = collection(queryDB, "orders")
    addDoc(ordersCollection,order)
    .then(resp=>console.log(resp))
    .catch(err=>console.log(err))
  }
  const handleOnChange=(evt)=>{
    setDataForm({
      ...dataForm,
      [evt.target.name] : evt.target.value

    })
  }

  return (
    <div className="text-center">
      {cartList.map(prod => <div key={prod.id}>
          <img src={prod.imageUrl} className="w-25"/>
          {prod.name} - ${prod.price} - Cantidad: {prod.count}
          <button className="btn btn-danger" onClick={ () => eliminarProducto(prod.id) }> X </button>
      </div>)}
      <button className="btn btn-warning" onClick={deleteCart}>Vaciar Carrito</button>
        <h3>Precio total: {precioTotal()}</h3>

        <form onSubmit={handleAddOrder}>
          <input type="text" name="name" placeholder="ingrese el nombre" value={dataForm.name} onChange={handleOnChange}/>
          <input type="number" name="phone" placeholder="ingrese el telefono" value={dataForm.phone} onChange={handleOnChange}/>
          <input type="text" name="email" placeholder="ingrese el email" value={dataForm.email} onChange={handleOnChange}/>

          <button className="btn btn-success">Generar orden</button>

        </form>
        
    </div>
  )
}

export default CartContainer