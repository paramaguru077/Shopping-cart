import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Routes, Route } from 'react-router-dom'
import Header from './containers/Header'
import ProductComponent from './containers/ProductComponent'
import ProductDetails from './containers/ProductDetails'
import ProductListing from './containers/ProductListing'
import Missing from './containers/Missing'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
        <Route path="*" element={<Missing/>} />
      </Routes>
    </div>
      
  )
}

export default App