import React from 'react';

function ExploreMore() {
  return (
    <div style={{
      backgroundColor: '#F9F9F6', 
      padding: '50px 0', 
      textAlign: 'center', 
      fontFamily: 'Georgia, serif',
    }}>
      {/* Header text */}
      <h2 style={{
        fontSize: '32px', 
        color: '#333333', 
        fontWeight: 'bold', 
        marginBottom: '40px',
      }}>
        EXPLORE MORE IN G
      </h2>

      {/* Container for cards */}
      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px',
        padding: '0 30px',
        flexWrap: 'wrap', // Added to allow wrapping on smaller screens
      }}>
        {/* Card 1 */}
        <div style={{
          backgroundColor: '#FFF9F0', 
          width: '300px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
          borderRadius: '10px', 
          overflow: 'hidden',
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/Aru Valley.jpg`} 
            alt="Pari Mahal" 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
          />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: '#333333', 
              marginBottom: '10px',
            }}>
              Aru Valley &gt;
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666666', 
              lineHeight: '1.6',
            }}>
              Located about 11 km from Pahalgam, Aru Valley is a serene spot known for its breathtaking landscapes and serves as a base for various treks.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{
          backgroundColor: '#FFF9F0', 
          width: '300px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
          borderRadius: '10px', 
          overflow: 'hidden',
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/Chandanwari.jpg`}  
            alt="Indira Gandhi Memorial Tulip Garden" 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
          />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: '#333333', 
              marginBottom: '10px',
            }}>
              Skiing and Snowboarding &gt;
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666666', 
              lineHeight: '1.6',
            }}>
              Situated at an elevation of 2,895 meters, Chandanwari is the starting point for the Amarnath Yatra and offers stunning views of the surrounding mountains.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{
          backgroundColor: '#FFF9F0', 
          width: '300px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
          borderRadius: '10px', 
          overflow: 'hidden',
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/Betaab.jpg`}
            alt="Shalimar Bagh" 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
          />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: '#333333', 
              marginBottom: '10px',
            }}>
              Apharwat Peak &gt;
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666666', 
              lineHeight: '1.6',
            }}>
               Named after a Bollywood film, this valley is surrounded by deodar trees and offers picturesque views, making it a popular spot for tourists.
            </p>
          </div>
        </div>
      </div>

      {/* Apple Orchards Section */}
      <div style={{
        position: 'relative', 
        marginTop: '50px',
      }}>
        <img 
          src={`${process.env.PUBLIC_URL}/Mamleshwar.jpg`} 
          alt="Apple Orchards in Kashmir" 
          style={{ width: '100%', height: '500px', maxWidth: '800px', borderRadius: '8px' }} 
        />
        <div style={{
          position: 'absolute', 
          top: '10%', 
          right: '12%', 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          padding: '20px', 
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'left',
          maxWidth: '250px',
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            color: '#333', 
            fontWeight: 'bold', 
            marginBottom: '10px',
          }}>
            Mamleshwar Temple 
          </h3>
          <p style={{
            fontSize: '14px', 
            color: '#666', 
            lineHeight: '1.6',
          }}>
            Mamleshwar Temple is a historic Hindu temple in Kashmir known for its ancient architecture and spiritual significance.
          </p>
          <h4 style={{
            fontSize: '18px', 
            color: '#333', 
            fontWeight: 'bold', 
            marginTop: '20px',
          }}>
            Activities
          </h4>
          <p style={{
            fontSize: '14px', 
            color: '#666', 
            lineHeight: '1.6',
          }}>
            Visitors can participate in rituals, explore cultural heritage, and enjoy photography of the temple and its surroundings.
          </p>
          <h4 style={{
            fontSize: '18px', 
            color: '#333', 
            fontWeight: 'bold', 
            marginTop: '20px',
          }}>
            Best Time to Visit
          </h4>
          <p style={{
            fontSize: '14px', 
            color: '#666', 
            lineHeight: '1.6',
          }}>
            The best time to visit is from October to March for pleasant weather and vibrant spiritual activities.
          </p>
        </div>
      </div>

      {/* Dachigam National Park Section with Box on the Left */}
      <div style={{
        position: 'relative', 
        marginTop: '70px', // Increased margin to avoid overlap
      }}>
        <img 
          src={`${process.env.PUBLIC_URL}/Tulian lake.jpg`} 
          alt="Dachigam National Park" 
          style={{ width: '100%', height: '500px', maxWidth: '800px', borderRadius: '8px' }} 
        />
        <div style={{
          position: 'absolute', 
          top: '10%', 
          left: '12%', 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          padding: '20px', 
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'left',
          maxWidth: '250px',
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            color: '#333', 
            fontWeight: 'bold', 
            marginBottom: '10px',
          }}>
            Tulian Lake
          </h3>
          <p style={{
            fontSize: '14px', 
            color: '#666', 
            lineHeight: '1.6',
          }}>
            Tulian Lake is a stunning alpine lake situated at an altitude of 2,400 meters, offering breathtaking views and tranquility.
          </p>
          <h4 style={{
            fontSize: '18px', 
            color: '#333', 
            fontWeight: 'bold', 
            marginTop: '20px',
          }}>
            Activities
          </h4>
          <p style={{
            fontSize: '14px', 
            color: '#666', 
            lineHeight: '1.6',
          }}>
            Ideal for trekking, photography, and camping, the lake provides a serene escape into nature.
          </p>
          <h4 style={{
            fontSize: '18px', 
            color: '#333', 
            fontWeight: 'bold', 
            marginTop: '20px',
          }}>
            Best Time to Visit
          </h4>
          <p style={{
            fontSize: '14px', 
            color: '#666', 
            lineHeight: '1.6',
          }}>
            The best time to visit is during the summer months from June to September for clear skies and pleasant weather.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;


