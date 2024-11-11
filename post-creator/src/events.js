import React from 'react';

function KashmirEvents() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Montserrat", sans-serif', color: '#333' }}>
      {/* Image with full width */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/Kashmir-Festivals.jpg`}   
          alt="Kashmir Festivals" 
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
          KASHMIR FESTIVALS & HOLIDAYS
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
        Kashmir, with its rich cultural heritage and diverse traditions, celebrates a number of festivals throughout the year. From religious festivals to joyous local events, the region comes alive with vibrant colors, music, and dance, reflecting the cultural vibrancy of the people.
        <br /><br />
        Whether you're experiencing the grand festivities of Eid or the serene atmosphere during the Tulip Festival, Kashmir offers a unique blend of cultural celebrations that showcase its deep-rooted history and traditions. 
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
          POPULAR FESTIVALS & EVENTS IN KASHMIR
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
              src={`${process.env.PUBLIC_URL}/Eid-Kashmir.jpg`} 
              alt="Eid Festival in Kashmir" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#333333', 
                marginBottom: '10px',
              }}>
                Eid Ul-Fitr &gt;
              </h3>
              <p style={{
                fontSize: '14px', 
                color: '#666666', 
                lineHeight: '1.6',
              }}>
                Eid Ul-Fitr is a major festival celebrated by Muslims in Kashmir, marking the end of Ramadan. The festival is celebrated with prayers, feasts, and community gatherings across the valley.
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
              src={`${process.env.PUBLIC_URL}/Tulip-Festival.jpg`}  
              alt="Tulip Festival Kashmir" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#333333', 
                marginBottom: '10px',
              }}>
                Tulip Festival &gt;
              </h3>
              <p style={{
                fontSize: '14px', 
                color: '#666666', 
                lineHeight: '1.6',
              }}>
                Held in Srinagar every spring, the Tulip Festival is a breathtaking display of blooming tulips, attracting visitors from all over the world to enjoy the vibrant flower fields.
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
              src={`${process.env.PUBLIC_URL}/Baisakhi-Festival.jpg`}
              alt="Baisakhi Festival Kashmir" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#333333', 
                marginBottom: '10px',
              }}>
                Baisakhi Festival &gt;
              </h3>
              <p style={{
                fontSize: '14px', 
                color: '#666666', 
                lineHeight: '1.6',
              }}>
                Baisakhi marks the beginning of the harvest season in Kashmir and is celebrated with religious ceremonies, dances, and traditional music in villages and towns.
              </p>
            </div>
          </div>
        </div>

        {/* New Year Celebrations Section */}
        <div style={{
          position: 'relative', 
          marginTop: '50px',
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/Lohri-Kashmir.jpg`} 
            alt="Lohri Festival Kashmir" 
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
              Lohri Festival 
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666', 
              lineHeight: '1.6',
            }}>
              Lohri is celebrated by Kashmiri Pandits with much enthusiasm. It marks the harvest of crops and is accompanied by prayers and dance around the bonfire.
            </p>
          </div>
        </div>

        {/* Shikara Festival Section */}
        <div style={{
          position: 'relative', 
          marginTop: '70px',
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/Shikara-Festival.jpg`} 
            alt="Shikara Festival Kashmir" 
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
              Shikara Festival 
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666', 
              lineHeight: '1.6',
            }}>
              The Shikara Festival is a unique celebration of the iconic houseboats and shikaras (boats) of Kashmir. It includes boat races, cultural performances, and celebrations on Dal Lake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KashmirEvents;
