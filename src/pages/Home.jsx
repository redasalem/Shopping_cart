import React from 'react'
import {products} from '../product'
import ProductCard from '../components/ProductCard'
 
const Home = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10'>
        {products.map((product,key)=>{
          return <ProductCard key={key} product={product}/>
          

        })}

      </div>
    </div>
  )
}

export default Home