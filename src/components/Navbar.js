import React from "react";

function Navbar({ totalItems, onToggleCart }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Left */}
        <h2>ShoeStore </h2>

        {/* Center */}
        <ul className="menu">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Right */}
        <div className="cart" onClick={onToggleCart}>
          🛒 {totalItems}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;