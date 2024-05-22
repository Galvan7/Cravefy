import React, { useContext, useEffect } from "react";
import "./verify.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);

  console.log(success, orderId);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div>
      <div className="verify">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Verify;
