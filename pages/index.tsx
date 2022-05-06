import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({data, length})=>{
        setProductList(data)
      });
  }, []);
console.log(productList);

  return (
    <>
      <Navbar />
      Home
      {productList.map((product)=>
         <img key={product.id} src={product.image}/>
      )}
    </>
  );
};

export default Home;
