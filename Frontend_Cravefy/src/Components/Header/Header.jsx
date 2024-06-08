import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
        Tempting flavors, effortless cuisine
        </h2>
        <p>
          Indulge in an unparalleled array of culinary wonders meticulously
          crafted by renowned chefs, each dish promising a symphony of flavors
          and the epitome of quality. At Cravify, we're dedicated to bringing
          you the finest gastronomic experiences, ensuring that every craving is
          met with perfection—delivered straight to your doorsteps.
        </p>
        <button>Scroll to view menu</button>
      </div>
    </div>
  );
};

export default Header;
