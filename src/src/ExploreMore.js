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
        EXPLORE MORE IN SRINAGAR
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
            src={`${process.env.PUBLIC_URL}/parimahal.jpg`} 
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
              Pari Mahal &gt;
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666666', 
              lineHeight: '1.6',
            }}>
              A historic monument and garden that was once a Buddhist monastery, later converted into a school of astrology.
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
            src={`${process.env.PUBLIC_URL}/indiragandhi.jpg`}  
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
              Indira Gandhi Memorial Tulip Garden &gt;
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666666', 
              lineHeight: '1.6',
            }}>
              The largest tulip garden in Asia, located at the foothills of the Zabarwan mountain range. Visit during the Tulip Festival in April to witness a stunning display of colorful tulips.
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
            src={`${process.env.PUBLIC_URL}/shamirbaug.jpg`}
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
              Shamir Bagh &gt;
            </h3>
            <p style={{
              fontSize: '14px', 
              color: '#666666', 
              lineHeight: '1.6',
            }}>
               A beautiful Mughal garden known for its terraced lawns, fountains, and Chinar trees. The intricate design and historical significance of the garden make it a must-visit.
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
          src={`${process.env.PUBLIC_URL}/apple.jpg`} 
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
            Description
          </h3>
          <p style={{
            fontSize: '14px', 
            color: '#666', 
            lineHeight: '1.6',
          }}>
            Srinagar is famous for its apple orchards, especially during the harvest season.
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
            Visit the orchards to see the apple-picking process and enjoy the scenic beauty.
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
            September to October during the harvest season.
          </p>
        </div>
      </div>

      {/* Dachigam National Park Section with Box on the Left */}
      <div style={{
        position: 'relative', 
        marginTop: '70px', // Increased margin to avoid overlap
      }}>
        <img 
          src={`${process.env.PUBLIC_URL}/dachigam.jpg`} 
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
            Description 
          </h3>
          <p style={{
            fontSize: '14px', 
            color: '#666', 
            lineHeight: '1.6',
          }}>
            A national park known for its rich biodiversity, including the endangered Hangul deer.
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
            Wildlife safaris and bird watching.
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
            March to October for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;



