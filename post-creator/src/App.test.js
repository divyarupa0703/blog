import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './styles.css';
import BlogHeader from './BlogHeader';

// Import your existing components
import ExploreMore from '../../post-creator/src/ExploreMore';
import Gulmarg from '../../post-creator/src/Gulmarg';
import Pahalgam from './Pahalgam';
import Restaurants from './restaurants';
import FineDining from './fineDining';
import StreetFood from './streetFood';
import CasualDining from './casualDining';
import KashmirEvents from './events';
import KashmirSpecialEvents from './festivals';
import CabinsAndCottages from './CabinsAndCottages';
import PlacesToEat from './PlacesToEat';

// Import blog components
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import SinglePost from './components/SinglePost';

// Main App Component
const App = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);  // User is authenticated if token is found
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);  // Update authentication state
  };

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token on logout
    setIsAuthenticated(false);  // Update authentication state
  };

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

        {/* Menu Section */}
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

        {/* Explore Blog Section */}
        <div className="blog-section">
          <h2>Do you want to explore our blog?</h2>
          <Link to="/blog" className="blog-link">Explore Blog</Link>
        </div>

        {/* Define Routes for each component */}
        <Routes>
          {/* Destination Routes */}
          <Route path="/exploremore" element={<ExploreMore />} />
          <Route path="/gulmarg" element={<Gulmarg />} />
          <Route path="/pahalgam" element={<Pahalgam />} />

          {/* Places to Stay Routes */}
          <Route path="/cabins" element={<CabinsAndCottages />} />
          <Route path="/eat" element={<PlacesToEat />} />

          {/* Dining Routes */}
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/fine-dining" element={<FineDining />} />
          <Route path="/casual-dining" element={<CasualDining />} />
          <Route path="/street-food" element={<StreetFood />} />

          {/* Events Routes */}
          <Route path="/events" element={<KashmirEvents />} />
          <Route path="/festivals" element={<KashmirSpecialEvents />} />

          {/* Blog Routes */}
          <Route
    path="/blog"
    element={
      <>
        <BlogHeader isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <PostList />
      </>
    }
  />
  <Route path="/login" element={<Login onLogin={handleLogin} />} />
  <Route path="/register" element={<Register />} />
  <Route path="/create-post" element={<CreatePost />} />
  <Route path="/post/:postId" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
