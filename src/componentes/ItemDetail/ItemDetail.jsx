import ItemCount from "../Counter/ItemCount"

const ItemDetail = ({product})=>{

  const onAdd = (count) => {
    console.log('productos seleccionados :', count);
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

      <ItemCount initial = {1} stock={product.stock} onAdd={onAdd}/>
    </div>
  )
}
export default ItemDetail