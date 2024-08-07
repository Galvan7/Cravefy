import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Verify from "./Pages/Verify/verify";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Loading from './Components/Loading';
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
  const [showLogin, setShowLogin] = useState(false);
  const [backendReady, setBackendReady] = useState(false);
  const backendUrl = 'https://cravefy.onrender.com'; 

  useEffect(() => {
    const initialize = async () => {
      await waitForBackend(backendUrl);
      setBackendReady(true);
    };
    initialize();
  }, []);

  if (!backendReady) {
    return <Loading />;
  }

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
