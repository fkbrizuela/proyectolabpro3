import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {getAllProducts, getProductsByCategory } from "../../data/products"

const ItemListContainer = ({ greeting }) => {
  const [load, setLoad] = useState('Cargando...')
  const { CategoryName } = useParams()


  setTimeout(() => {
    setLoad('carga completa')
  }, 2000)

  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log(CategoryName);
  }, [CategoryName])

  useEffect(()=>{
    if(CategoryName) {
      getProductsByCategory(CategoryName)
      .then((data)=> setProducts(data))
      .catch((error)=>console.warn(error))
    }
    else {
      getAllProducts()
      .then((data)=>setProducts(data))
      .catch((error)=>console.warn(error))
    }
    
  },[CategoryName])



  return (
    <div className="ContainerMain">
      <h1>Lista de Productos</h1>
      <p>{greeting}</p>
      <h2>{load}</h2>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer