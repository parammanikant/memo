import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './Hooks/useFetch'
import Products from './Products'
import ProductInfo from './ProductInfo'

function App() {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)

  const [apiurl,setApiUrl] = useState('https://dummyjson.com/products');

  const [singleProductDetail, setSingleProductDetail] = useState([])

  async function getData(){

    let productsData = await useFetch();

    let filteredProducts = productsData.products.filter((parr)=>{
      return parr.images.length > 1
    })

    setProducts(filteredProducts);
  }

  //getData();

  useEffect(()=>{
    getData();
  },[])

  //useMemo(()=>getData(),[apiurl]);

  return (
    <>
      <Products productsArr = {products} showmodel={open} setOpen={setOpen} setSingleProductDetail={setSingleProductDetail}/>
      <div>
      <ProductInfo showmodel={open} setOpen={setOpen} singleProductDetail={singleProductDetail}/>
      </div>
      
    </>
  )
}

export default App
