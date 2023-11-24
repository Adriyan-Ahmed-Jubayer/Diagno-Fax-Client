import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Styles/Style.css'
import{  RouterProvider } from"react-router-dom";
import Routers from './Routes/Routers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={Routers}/>
  </React.StrictMode>,
)
