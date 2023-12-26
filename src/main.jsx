import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Jilid1 from './pages/jilid1.jsx'
import Jilid2 from './pages/jilid2.jsx'
import Home from './pages/homePage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'jilid1',
        element: <Jilid1/>,
      },
      {
        path: 'jilid2',
        element: <Jilid2/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
