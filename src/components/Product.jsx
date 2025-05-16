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

export default Product;