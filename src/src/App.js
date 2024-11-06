import React from 'react';
import ExploreMore from './Pahalgam'; // Importing ExploreMore from Gulmarg.js

function App() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Montserrat", sans-serif', color: '#333' }}>
      {/* Image with full width */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/Pahalgum.jpg`}   
          alt="Beautiful view of Srinagar, Kashmir" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        {/* Text overlay at the bottom of the image */}
        <h1 style={{
            position: 'absolute', 
            bottom: '20px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            fontSize: '60px', 
            fontWeight: '700', 
            color: '#FFD700',
            fontFamily: '"Montserrat", sans-serif', 
            letterSpacing: '2px', 
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)', 
            textTransform: 'uppercase', 
          }}>
          PAHALGAM
        </h1>
      </div>
      
      {/* Styled paragraph below the image */}
      <p style={{
          fontSize: '18px', 
          lineHeight: '1.8', 
          color: '#333', 
          margin: '40px auto', 
          textAlign: 'left',
          maxWidth: '800px', 
          padding: '0 30px', 
          fontFamily: '"Georgia", serif', 
        }}>
        
        Pahalgam, often referred to as the "Valley of Shepherds," is a picturesque town nestled in the Anantnag district of Kashmir, 
        surrounded by the majestic Himalayas and lush green landscapes.
        Located at the confluence of the Lidder River and the Sheshnag Lake, 
        Pahalgam is a true paradise for nature lovers and adventure seekers alike. 
        <br /><br />
        Whether you are trekking through its verdant meadows, 
        skiing down snow-covered slopes, or simply soaking in the serene ambiance by the river,
        Pahalgam promises an unforgettable journey that lingers in the hearts of all who visit. 
       
        
         
        
        
        
      </p>

      {/* Include the ExploreMore component */}
      <ExploreMore />
    </div>
  );
}

export default App;
