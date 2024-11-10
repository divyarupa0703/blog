import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExploreMore from './ExploreMore';
import Gulmarg from './Gulmarg';
import Pahalgam from './Pahalgam';
import Restaurants from './restaurants';
import FineDining from './fineDining';
import StreetFood from './streetFood';
import CasualDining from './casualDining';
import KashmirEvents from './events';
import KashmirSpecialEvents from './festivals';

import './NavBar.css';
import CabinsAndCottages from './CabinsAndCottages';
import PlacesToEat from './PlacesToEat';

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
              {/* Popular Destinations */}
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

              {/* Places to Stay */}
              <div
                className="nav-item-container"
                onMouseEnter={() => handleMouseEnter('Places to Stay')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="nav-item">Places to Stay</div>
                {hoveredItem === 'Places to Stay' && (
                  <div className="dropdown-content">
                    <Link to="/cabins">CabinsAndCottages</Link>
                    <Link to="/eat">PlacesToEat</Link>
                  </div>
                )}
              </div>

              {/* Places to Eat */}
              <div
                className="nav-item-container"
                onMouseEnter={() => handleMouseEnter('Places to Eat')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="nav-item">Places to Eat</div>
                {hoveredItem === 'Places to Eat' && (
                  <div className="dropdown-content">
                    <Link to="/restaurants">Restaurants</Link>
                    <Link to="/fine-dining">Fine Dining</Link>
                    <Link to="/casual-dining">Casual Dining</Link>
                    <Link to="/street-food">Street Food</Link>
                  </div>
                )}
              </div>

              {/* Things to Do */}
              <div
                className="nav-item-container"
                onMouseEnter={() => handleMouseEnter('Things to Do')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="nav-item">Things to Do</div>
                {hoveredItem === 'Things to Do' && (
                  <div className="dropdown-content">
                    <Link to="/events">Events</Link>
                    <Link to="/festivals">Festivals</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Define Routes for each component */}
        <Routes>
          <Route path="/exploremore" element={<ExploreMore />} />
          <Route path="/gulmarg" element={<Gulmarg />} />
          <Route path="/pahalgam" element={<Pahalgam />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/fine-dining" element={<FineDining />} />
          <Route path="/casual-dining" element={<CasualDining />} />
          <Route path="/street-food" element={<StreetFood />} />
          <Route path="/events" element={<KashmirEvents />} />
          <Route path="/festivals" element={<KashmirSpecialEvents />} />
          <Route path="/cabins" element={<CabinsAndCottages />} />
          <Route path="/eat" element={<PlacesToEat />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
