import { useEffect, useState } from "react";

import Product from "../components/Product";

const CATEGORY = 'men\'s clothing';

function Products () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.filter(item => item.category === CATEGORY)));
    }

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Catalog</h1>
      <div className="mt-6 gap-12 md:grid md:grid-cols-2 lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
        {products.map(product => (
            <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Products;