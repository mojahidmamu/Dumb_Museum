import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout.jsx'
import Home from './Home.jsx'
import ProductsPage from './Components/ProductsPage.jsx'
import Dashboard from './Components/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index:  true,
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        }, 
        element: <Home></Home>,
      }, 
      {
        path: 'idea/:id',
        loader: async ({params}) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const product = data.find(p => p.id == parseInt(params.id));
        return product;
        },
        element: <ProductsPage></ProductsPage>,
      }, 
      {
        path: '/dashboard',
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
        element: <Dashboard></Dashboard>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "var(--color-base-100)",
          color: "var(--color-base-content)",
        },
        success: {
          style: {
            background: "var(--color-success)",
            color: "var(--color-success-content)",
          },
        },
        error: {
          style: {
            background: "var(--color-error)",
            color: "var(--color-error-content)",
          },
        },
      }}
      />
    </RouterProvider>
  </StrictMode>,
)
