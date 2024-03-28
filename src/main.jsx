import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './font.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorHandle from './components/Routes/Error/ErrorHandle.jsx'
import Login from './components/Routes/LoginRegister/Login.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import Register from './components/Routes/LoginRegister/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorHandle />
  },
  {
    path: '/login',
    element: <Login />  
  },
  {
    path: '/register',
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)