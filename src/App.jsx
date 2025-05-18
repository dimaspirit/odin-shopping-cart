import './App.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import { CartContext } from './contexts/CartContext';

const CATEGORY = 'men\'s clothing';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleCartItem = useCallback((id) => {
    const isProductAdded = cart.find(item => item.id === id);
    if(isProductAdded) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.concat([{id, qty: 1}]));
    }
  }, [cart]);

  const changeQty = useCallback((id, qty) => {
    const cartUpdated = cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          qty,
        }
      }

      return item;
    });

    setCart(cartUpdated);
  }, [cart]);

  const cartContextValue = useMemo(() => ({
    cart,
    changeQty,
    toggleCartItem,
  }), [cart, changeQty, toggleCartItem]);

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
      <CartContext.Provider value={cartContextValue}>
        <Navbar />

        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Outlet context={{products}} />
          </div>
        </main>
      </CartContext.Provider>
    </>
  )
}

export default App
