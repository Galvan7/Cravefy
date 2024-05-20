import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import axios from 'axios'
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [food_list,setFoodList]= useState([]);
  const [cartItems, setCartItems] = useState({}); //cartItems is array
  const url="http://localhost:4000"
  const [token,setToken]=useState("");
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 })); ///... means copy properties of previous value]]
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let tot = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        tot += iteminfo.price * cartItems[item];
      }
    }
    return tot;
  };

  const fetchFoodList= async()=>{
    const response= await axios.get(url+"/api/food/list");
    // console.log(response.data)
    setFoodList(response.data.data)
  }

  useEffect(()=>{
    async function loadData(){
      await fetchFoodList()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
