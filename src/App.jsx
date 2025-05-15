import './App.css'
import { Link, Outlet } from 'react-router'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Go to PRODUCTS page</Link>
        <Link to="cart">Go to CART page</Link>
      </nav>

      <Outlet />

      <footer>Footer</footer>
    </>
  )
}

export default App
