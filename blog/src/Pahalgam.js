import React from 'react';

function Pahalgam() {
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
        surrounded by the majestic Himalayas and lush green landscapes. Located at the confluence of the Lidder River and the Sheshnag Lake, 
        Pahalgam is a true paradise for nature lovers and adventure seekers alike.
        <br /><br />
        Whether you are trekking through its verdant meadows, skiing down snow-covered slopes, or simply soaking in the serene ambiance by the river,
        Pahalgam promises an unforgettable journey that lingers in the hearts of all who visit. 
      </p>

      <div style={{
        backgroundColor: '#F9F9F6', 
        padding: '50px 0', 
        textAlign: 'center', 
        fontFamily: 'Georgia, serif',
      }}>
        <h2 style={{
          fontSize: '32px', 
          color: '#333333', 
          fontWeight: 'bold', 
          marginBottom: '40px',
        }}>
          EXPLORE MORE IN PAHALGAM
        </h2>

        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px',
          padding: '0 30px',
          flexWrap: 'wrap',
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
                Chandanwari &gt;
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
                Betaab &gt;
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
          </div>
        </div>

        {/* Dachigam National Park Section with Box on the Left */}
        <div style={{
          position: 'relative', 
          marginTop: '70px',
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
              Dachigam is home to a diverse range of wildlife, including the endangered Hangul deer. It offers breathtaking landscapes and scenic views.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pahalgam;
