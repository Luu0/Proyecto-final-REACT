import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mFetch } from "../utils/mockfetch"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    // api manejo de estados etc
    const [product, setProduct ] = useState({})
    const { pid } = useParams()
   
    useEffect(()=>{
        // llamada a la api
        mFetch(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err=> console.log(err))
    },[])
    return (
        <div className="d-flex justify-content-center">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer