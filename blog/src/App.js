import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExploreMore from './ExploreMore';
import Gulmarg from './Gulmarg';
import Pahalgam from './Pahalgam';
import './NavBar.css';

const App = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <Router>
      <div className="app">
        <div className="intro">
          <h1>Welcome to the Wonders of Kashmir!</h1>
          <p>
            Discover the captivating beauty of Kashmir, from stunning landscapes to cultural heritage.
            Explore popular destinations, plan unforgettable activities, and find perfect places to stay.
          </p>
        </div>

        <div className="menu-container">
          <button className="menu-button" onClick={toggleMenu}>
            Menu
          </button>

          {menuVisible && (
            <div className="menu">
              <div
                className="nav-item-container"
                onMouseEnter={() => handleMouseEnter('Popular Destinations')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="nav-item">Popular Destinations</div>
                {hoveredItem === 'Popular Destinations' && (
                  <div className="dropdown-content">
                    <Link to="/exploremore">Srinagar</Link>
                    <Link to="/gulmarg">Gulmarg</Link>
                    <Link to="/pahalgam">Pahalgam</Link>
                  </div>
                )}
              </div>
              
              {/* Add other menu items (Things to Do, Events, etc.) as needed */}
            </div>
          )}
        </div>

        {/* Define Routes for each component */}
        <Routes>
          <Route path="/exploremore" element={<ExploreMore />} />
          <Route path="/gulmarg" element={<Gulmarg />} />
          <Route path="/pahalgam" element={<Pahalgam />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
