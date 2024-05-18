import React from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Order from './pages/Order/Order.jsx'
const App = () => {
  return (
    <div> 
      <Navbar/>
        <div className="app-content">
          <Sidebar/>
          <Routes>
          <Route path ="/add" element={<Add/>}/>
          <Route path ='/list' element={<List/>}/>
          <Route path ='/order' element={<Order/>}/>
        </Routes>
        </div>
        
    </div>
  )
}

export default App