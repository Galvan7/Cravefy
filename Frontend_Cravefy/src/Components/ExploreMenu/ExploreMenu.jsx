import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from our diverse and tantalizing menu, boasting a wide array of
        dishes from around the globe. Whether you're craving Asian fusion,
        Italian classics, or hearty comfort food, we've got you covered. Simply
        select your desired dish, and our swift delivery service will have it at
        your doorstep in no time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item"> 
            {/* prev is argument passed the first one i mean ie prev=> ka prev  */}
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
