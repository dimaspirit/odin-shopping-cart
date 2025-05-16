import { useOutletContext } from "react-router-dom";
import Product from "../components/Product";

function Products () {
  const { products } = useOutletContext();

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