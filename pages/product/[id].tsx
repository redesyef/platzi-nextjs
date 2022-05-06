import { useRouter } from 'next/router'
import React from 'react'


const ProductItem = () => {
   const {query:{id}}= useRouter()
   
   const router = useRouter()
console.log(router.query)
  return (
    <div>ProductItem {id}</div>
  )
}

export default ProductItem