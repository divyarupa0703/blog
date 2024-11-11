import React from 'react';

function Restaurants() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Montserrat", sans-serif', color: '#333' }}>
      {/* Main Restaurant Image with Text Overlay */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/dining_experiences.jpg`}   
          alt="Elegant Fine Dining" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
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
          Dining Experiences
        </h1>
      </div>
      
      {/* Intro Paragraph */}
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
        Explore a range of exceptional dining experiences, from upscale fine dining to cozy cafés. Whether you’re in the mood for exotic flavors, fusion dishes, or traditional comfort foods, there's a place to satisfy every craving.
        <br /><br />
        Enjoy delicious meals with friends, family, or that special someone in an ambiance that complements the flavors on your plate.
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
          DISCOVER RESTAURANT STYLES
        </h2>

        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px',
          padding: '0 30px',
          flexWrap: 'wrap',
        }}>
          {/* Fine Dining Card */}
          <div style={{
            backgroundColor: '#FFF9F0', 
            width: '300px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px', 
            overflow: 'hidden',
          }}>
            <img 
              src={`${process.env.PUBLIC_URL}/FineDining.jpg`} 
              alt="Fine Dining" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#333333', 
                marginBottom: '10px',
              }}>
                Fine Dining &gt;
              </h3>
              <p style={{
                fontSize: '14px', 
                color: '#666666', 
                lineHeight: '1.6',
              }}>
                Indulge in a luxurious fine dining experience with carefully crafted dishes, sophisticated ambiance, and exceptional service.
              </p>
            </div>
          </div>

          {/* Casual Dining Card */}
          <div style={{
            backgroundColor: '#FFF9F0', 
            width: '300px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px', 
            overflow: 'hidden',
          }}>
            <img 
              src={`${process.env.PUBLIC_URL}/CasualDining.jpg`}  
              alt="Casual Dining" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#333333', 
                marginBottom: '10px',
              }}>
                Casual Dining &gt;
              </h3>
              <p style={{
                fontSize: '14px', 
                color: '#666666', 
                lineHeight: '1.6',
              }}>
                Relax and enjoy a laid-back dining experience with friends and family in a comfortable and inviting setting.
              </p>
            </div>
          </div>

          {/* Street Food Card */}
          <div style={{
            backgroundColor: '#FFF9F0', 
            width: '300px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px', 
            overflow: 'hidden',
          }}>
            <img 
              src={`${process.env.PUBLIC_URL}/StreetFood.jpg`}
              alt="Street Food" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#333333', 
                marginBottom: '10px',
              }}>
                Street Food &gt;
              </h3>
              <p style={{
                fontSize: '14px', 
                color: '#666666', 
                lineHeight: '1.6',
              }}>
                Experience local flavors at their best with street food that offers bold, vibrant tastes in a casual setting.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Dining Experience Section */}
        <div style={{
          position: 'relative', 
          marginTop: '50px',
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/Cafes.jpg`} 
            alt="Cozy Cafes" 
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
              Cozy Cafés 
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666', 
              lineHeight: '1.6',
            }}>
              Unwind with a cup of coffee, artisanal pastries, and a warm atmosphere in cozy neighborhood cafés.
            </p>
          </div>
        </div>

        {/* Brunch Spots Section */}
        <div style={{
          position: 'relative', 
          marginTop: '70px',
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/BrunchSpots.jpg`} 
            alt="Brunch Spots" 
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
              Brunch Spots
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666', 
              lineHeight: '1.6',
            }}>
              Discover brunch spots known for their unique menus, relaxed ambiance, and perfect weekend vibes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
