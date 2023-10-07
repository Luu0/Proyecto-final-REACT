import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  
  const [products, setProduct] = useState([])
  const [ loading, setLoading ] = useState(true)
  const {cid} = useParams()

  useEffect(()=>{

    if(cid){
      const db = getFirestore()
      const querycollection  = collection(db,"Items")
      const queryFilter = query(querycollection,where("category", "==",cid))
      getDocs(queryFilter)
      .then(resp => setProduct(resp.docs.map(product=>({id:product.id, ...product.data()}))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }else{
      const db = getFirestore()
      const querycollection  = collection(db,"Items")
      getDocs(querycollection)
      .then(resp => setProduct(resp.docs.map(product=>({id:product.id, ...product.data()}))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  },[cid])

  return (
    <div className="d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 container g-3 m-3">
        { loading  ? <h2>Loading ...</h2> : 
          <ItemList product={products}/>
        }
      </div>
    </div>
  )
}
export default ItemListContainer