import React from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Order from './pages/Order/Order.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url = "https://cravefy.onrender.com";
  return (
    <div> 

      <ToastContainer/>
      <Navbar/>
        <div className="app-content">
          <Sidebar/>
          <Routes>
          <Route path ="/add" element={<Add url={url}/>}/>
          <Route path ='/list' element={<List url={url}/>}/>
          <Route path ='/order' element={<Order url={url}/>}/>
        </Routes>
        </div>
        
    </div>
  )
}

export default App