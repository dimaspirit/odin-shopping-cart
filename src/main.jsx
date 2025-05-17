import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter(
  [{
    element: <App />,
    children: [{
      index: true,
      element: <Products />
    }, {
      path: 'cart',
      element: <Cart />
    }]
  }],
  { 
    basename: "/odin-shopping-cart/" 
  }
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
