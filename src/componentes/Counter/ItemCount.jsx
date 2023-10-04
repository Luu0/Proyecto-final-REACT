import { useState } from "react"

const ItemCount = ({initial, stock, onAdd})=>{
  const [counter,setcounter] = useState(initial)

  const handleAdd=()=>{
    if(counter<stock)
    setcounter(counter+1)
  }

  const handleSubstract=()=>{
    if (counter>initial)
    setcounter(counter-1)
  }
  const handleOnAdd = () => {
    onAdd(counter);
  }

  return (
    <div>
      <h2>Cuantos quiere comprar?</h2>
      <button className="btn btn-outline-dark" onClick={handleAdd}>+1</button>
      <label>
        <strong>{counter}</strong>
      </label>
      <button className="btn btn-outline-dark" onClick={handleSubstract}>-1</button>
      <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agragar al carrito</button>
    </div>

)}
export default ItemCount
