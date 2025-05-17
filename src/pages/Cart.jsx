import { useOutletContext } from "react-router-dom";

import CartItem from "../components/CartItem";

function Cart () {
  const { cart } = useOutletContext();

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-2xl font-bold text-gray-900">Cart ({cart.length})</h1>
      </div>

      <div className="flow-root sm:mx-auto sm:w-full sm:max-w-sm mt-8">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          <CartItem />
        </ul>
      </div>
    </>
  )
}

export default Cart;