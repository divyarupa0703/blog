import React from 'react';

function ExploreMore() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Montserrat", sans-serif', color: '#333' }}>
      {/* Image with full width */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/srinagar.jpg`} 
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
            color: '#FFFFFF',
            fontFamily: '"Montserrat", sans-serif', 
            letterSpacing: '2px', 
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', 
            textTransform: 'uppercase', 
          }}>
          SRINAGAR
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
        Srinagar is a captivating city that epitomizes the enchanting allure of Kashmir, 
        often referred to as "Paradise on Earth." Nestled in the heart of the Kashmir Valley, 
        this city is surrounded by the majestic Himalayas, lush green forests, and pristine lakes, 
        creating a breathtaking backdrop that enchants visitors year-round. The gentle sound of flowing rivers 
        and the whisper of the wind through the Chinar trees add to the serene ambiance, making Srinagar a 
        perfect retreat for nature lovers and those seeking tranquility.
        <br /><br />
        Srinagar is a city that beautifully encapsulates the essence of Kashmir, offering a harmonious 
        blend of natural beauty, rich history, and cultural diversity. Its stunning landscapes, vibrant 
        markets, and historical sites create a unique tapestry of experiences for travelers seeking to 
        immerse themselves in the charm of this remarkable destination. Srinagar promises an unforgettable 
        journey that lingers in the hearts of all who visit.
      </p>

      {/* Explore More Section */}
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
          EXPLORE MORE IN SRINAGAR
        </h2>

        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px',
          padding: '0 30px',
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
                Shalimar Bagh &gt;
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
      </div>

      {/* Apple Orchards Section */}
      <div style={{
        position: 'relative', 
        marginTop: '50px',
      }}>
        <img 
          src={`${process.env.PUBLIC_URL}/apple.jpg`} 
          alt="Apple Orchards in Kashmir" 
          style={{ width: '100%', height: 'auto', maxWidth: '800px', borderRadius: '8px' }} 
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
          <h3 style={{ fontSize: '24px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>Description</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
            Srinagar is famous for its apple orchards, especially during the harvest season.
          </p>
          <h4 style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginTop: '20px' }}>Activities</h4>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
            Visit the orchards to see the apple-picking process and enjoy the scenic beauty.
          </p>
          <h4 style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginTop: '20px' }}>Best Time to Visit</h4>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
            September to October during the harvest season.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;
