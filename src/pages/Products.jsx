import { useEffect, useState } from "react";

function Product({product}) {
  return (
    <div className="pt-4 card bg-base-100 shadow-sm">
      <figure>
        <img
          className="w-full h-80 object-contain"
          src={product.image}
          alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
        </h2>
        <p className="line-clamp-3 md:line-clamp-4">{product.description}</p>
        <div className="mt-2 card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

const CATEGORY = 'men\'s clothing';

function Products () {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.filter(item => item.category === CATEGORY)));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Products page</h1>
      <div className="mt-6 gap-12 md:grid md:grid-cols-2 lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
        {products.map(product => (
            <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Products;