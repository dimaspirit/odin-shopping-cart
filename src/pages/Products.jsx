import { useEffect, useState } from "react";

function Products () {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <h1>Products page</h1>
      {products.map(product => <h3 key={product.id}>{product.title}</h3>)}
    </>
  )
}

export default Products;