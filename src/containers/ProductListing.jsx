import React,{useEffect}from 'react'
import {useDispatch, useSelector} from "react-redux"
import ProductComponent from './ProductComponent'
import axios from "axios"
import {setProducts} from "../redux/Action/ProductAction"
const ProductListing = () => {
 const products = useSelector((state)=> state);
  const dispatch = useDispatch();
  //console.log(products);
  const fetchProducts = async ()=>{
    try{
      const response = await axios.get("https://fakestoreapi.com/products")
      dispatch(setProducts(response.data));
    }
    catch(err){
        console.log(err)
    }
  }
  useEffect(()=>{
        fetchProducts();  
  },[])
  console.log(products);
  return (
    <div  >
        <ProductComponent />
        
    </div>
  )
}

export default ProductListing