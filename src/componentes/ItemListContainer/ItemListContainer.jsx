import { useEffect, useState } from "react"
import { mFetch } from "../utils/mockfetch"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  
  const [products, setProduct] = useState([])
  const [ loading, setLoading ] = useState(true)
  const {cid} = useParams()
  
  useEffect(()=>{
    if(cid){
      mFetch()
      .then(respuesta => setProduct(respuesta.filter(product=>cid==product.category)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

    }else{
      mFetch()
      .then(respuesta => setProduct(respuesta))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  }, [cid])
  
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