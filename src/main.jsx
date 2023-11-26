import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Styles/Style.css'
import { RouterProvider } from "react-router-dom";
import Routers from './Routes/Routers';
import Authenticate from './Context/Authenticate';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authenticate>
      <RouterProvider router={Routers} />
    </Authenticate>
  </React.StrictMode>,
)
