import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    // api manejo de estados etc
    const [product, setProduct ] = useState({})
    const { pid } = useParams()
   
    useEffect(()=>{
        const db = getFirestore()
        const querydoc  = doc(db,"Items",pid)
        getDoc(querydoc)
        .then(resp => ({id:resp.id, ...resp.data()}) )
        .then(resp=>setProduct(resp))
      },[])
    return (
        <div className="d-flex justify-content-center">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer