import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="navbar-container">
      {/* Left half for main menu items */}
      <div className="menu">
        <button className="menu-button">Menu</button>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Popular Destinations')}
          onMouseLeave={handleMouseLeave}
        >
          Popular Destinations
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Things to Do')}
          onMouseLeave={handleMouseLeave}
        >
          Things to Do
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Events')}
          onMouseLeave={handleMouseLeave}
        >
          Events
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Places to Stay')}
          onMouseLeave={handleMouseLeave}
        >
          Places to Stay
        </div>
      </div>

      {/* Right half for dropdown menu */}
      <div className={`dropdown ${hoveredItem ? 'show' : ''}`}>
        {hoveredItem === 'Popular Destinations' && (
          <div className="dropdown-content">
            <p>Srinagar</p>
            <p>Gulmarg</p>
            <p>Pahalgam</p>
          </div>
        )}
        {hoveredItem === 'Things to Do' && (
          <div className="dropdown-content">
            <p>Hiking</p>
            <p>Skiing</p>
          </div>
        )}
        {hoveredItem === 'Events' && (
          <div className="dropdown-content">
            <p>Festivals</p>
            <p>Concerts</p>
          </div>
        )}
        {hoveredItem === 'Places to Stay' && (
          <div className="dropdown-content">
            <p>Cabins</p>
            <p>Cottages</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
