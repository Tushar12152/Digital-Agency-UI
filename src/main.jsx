import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routs from './Routs/Routs'
import SmoothScroll from './Components/SmoothScroll';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <SmoothScroll>
        <RouterProvider router={Routs}></RouterProvider>
     </SmoothScroll>
  </React.StrictMode>,
)
