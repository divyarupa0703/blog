import React from "react";

function Gulmarg() {
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
          EXPLORE MORE IN GULMARG
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
              src={`${process.env.PUBLIC_URL}/gulmarg.jpg`} 
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
                Gulmarg Gondola &gt;
              </h3>
              <p style={{
                fontSize: '14px', 
                color: '#666666', 
                lineHeight: '1.6',
              }}>
                Experience the thrill of riding the Gulmarg Gondola, one of the highest and longest cable cars in the world.
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
              src={`${process.env.PUBLIC_URL}/skiing.jpg`} 
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
                Gulmarg is renowned for its pristine slopes, making it a premier destination for skiing and snowboarding.
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
              src={`${process.env.PUBLIC_URL}/apharwat.jpg`} 
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
                A majestic peak offering panoramic views of the surrounding mountains.
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
            src={`${process.env.PUBLIC_URL}/st mary.jpg`} 
            alt="Apple Orchards in Kashmir" 
            style={{ width: '100%', height: '500px', maxWidth: '800px', borderRadius: '8px' }} 
          />
          <div style={{
            position: 'absolute', 
            top: '20%', 
            right: '10%', 
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
              St. Mary’s Church
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666', 
              lineHeight: '1.6',
            }}>
              St. Mary’s Church in Gulmarg is a beautiful Victorian-style church surrounded by stunning natural scenery.
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
              Visitors can hike to the church, enjoy photography, and explore its historical significance.
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
              The best time to visit is from May to August for pleasant weather.
            </p>
          </div>
        </div>
  
        {/* Dachigam National Park Section with Box on the Left */}
        <div style={{
          position: 'relative', 
          marginTop: '50px',
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/biosphere reserve.jpg`} 
            alt="Dachigam National Park" 
            style={{ width: '100%', height: '500px', maxWidth: '800px', borderRadius: '8px' }} 
          />
          <div style={{
            position: 'absolute', 
            top: '20%', 
            left: '10%', 
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
              Gulmarg Biosphere Reserve
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666', 
              lineHeight: '1.6',
            }}>
              Gulmarg Biosphere Reserve is a protected area known for its rich biodiversity, including various flora and fauna, set against the backdrop of the stunning Himalayas.
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
              Visitors can enjoy trekking, bird watching, and nature photography while exploring the diverse ecosystems within the reserve.
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
              The ideal time to visit is from April to October, when the weather is mild and the flora is in full bloom.
            </p>
          </div>
        </div>
      </div>
    );
  }

export  default Gulmarg;