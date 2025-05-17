import { useOutletContext } from "react-router-dom";
import { Link } from "react-router";

import CartItem from "../components/CartItem";

function Cart () {
  const { products, cart, setCart } = useOutletContext();

  const productFullInfo = cart.map((cartItem) => {
    const product = products.find(p => p.id == cartItem.id);
    return {
      ...product,
      ...cartItem,
    }
  });

  const total = productFullInfo.reduce((acc, product) => {
    return acc + product.price * product.qty; 
  }, 0);

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }

  const changeQty = (id, qty) => {
    const cartUpdated = cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          qty,
        }
      }

      return item;
    });
    console.log('cartUpdated', cartUpdated);

    setCart(cartUpdated);
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-2xl font-bold text-gray-900">Cart ({cart.length})</h1>
      </div>

      <div className="flow-root sm:mx-auto sm:w-full sm:max-w-sm mt-8">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {productFullInfo.map(p => <CartItem key={p.id} product={p} onRemove={handleRemoveItem} onChangeQty={changeQty} />) }
        </ul>

        <div className="border-t border-gray-200 px-4 py-6 mt-8 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <div className="mt-6">
            <Link to="/" className="btn btn-block btn-lg btn-primary">Checkout</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;