import './App.css';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

const CATEGORY = 'men\'s clothing';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
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
      <Navbar />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet context={{products, cart, setCart}} />
        </div>
      </main>
    </>
  )
}

export default App
