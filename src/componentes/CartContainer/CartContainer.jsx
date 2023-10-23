import { useContext, useState } from "react"
import { useCartContext } from "../context/CartContext"
import{addDoc, collection, getFirestore} from "firebase/firestore"
import { Link } from "react-router-dom"

const CartContainer = () => {

  const [dataForm,setDataForm]=useState({
    name:"",
    phone:"",
    email:"",
    email2:""
  })
  const {cartList, deleteCart, eliminarProducto, precioTotal} = useCartContext()

  const handleAddOrder = async (evt)=>{
    evt.preventDefault()

    if (!dataForm.name || !dataForm.phone || !dataForm.email || !dataForm.email2) {
      alert("NO SE PUDEN DEJAR LOS CAMPOS EN BLANCO");
      return;
    } else if (dataForm.email !== dataForm.email2) {
      alert("LOS MAILS TIENEN QUE CONCIDIR");
      return;
    }
    

    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(prod=>{
      return {id:prod.id, name:prod.name, price:prod.price, quantity:prod.count}
    })
    order.total = precioTotal()
    const queryDB = getFirestore()
    const ordersCollection = collection(queryDB, "orders")
    addDoc(ordersCollection,order)
    .then(resp=>alert("Su orden es: "+ resp.id))
    .catch(err=>console.log(err))
  }
  const handleOnChange=(evt)=>{
    setDataForm({
      ...dataForm,
      [evt.target.name] : evt.target.value
    })
  }

  return (
    cartList.length > 0 ?
      <div className="text-center">
        {cartList.map(prod => <div className="border-bottom" key={prod.id}>
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
            <input type="text" name="email2" placeholder="Confirme su email" value={dataForm.email2} onChange={handleOnChange}/>

            <button className="btn btn-success">Generar orden</button>

          </form>
          
      </div>
      :

    <div className="text-center">
        <h2>No hay productos en el carrito</h2>
        <Link to={"/"}>Ir a comprar algo</Link>
    </div>
    
  )
}

export default CartContainer