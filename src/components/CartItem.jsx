function CartItem({product, onRemove, onChangeQty}) {
  const handleChangeQty = (event) => {
    const value = event.target.value;

    onChangeQty(product.id, +value);
  }


  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={product.image} alt={product.description} className="size-full object-contain" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{product.title}</a>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Rating: {product.rating.rate}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div>
            <input
              type="number"
              className="input input-sm validator"
              required
              value={product.qty}
              placeholder="Qty"
              min="1"
              max="99"
              title="Must be between be 1 to 99"
              onChange={handleChangeQty}
            />
            <p className="validator-hint">Must be between be 1 to 99</p>
          </div>

          <div className="flex">
            <button className="btn btn-ghost" onClick={() => onRemove(product.id)}>Remove</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem;