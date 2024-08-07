import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add.jsx';
import List from './pages/List/List.jsx';
import Order from './pages/Order/Order.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Loading from './components/Loading'
import 'react-toastify/dist/ReactToastify.css';

// Ping Backend Function
const pingBackend = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return true;
        }
    } catch (error) {
        console.error("Backend is not responding yet...");
    }
    return false;
};

// Wait for Backend Function
const waitForBackend = async (url, interval = 5000) => {
    while (true) {
        const isReady = await pingBackend(url);
        if (isReady) {
            break;
        }
        await new Promise(resolve => setTimeout(resolve, interval));
    }
};


const App = () => {
  const [backendReady, setBackendReady] = useState(false);
  const url = "https://cravefy.onrender.com";

  useEffect(() => {
    const initialize = async () => {
      await waitForBackend(url);
      setBackendReady(true);
    };
    initialize();
  }, [url]);

  if (!backendReady) {
    return <Loading />;
  }

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
