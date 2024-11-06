import React from 'react';

function KashmirSpecialEvents() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Montserrat", sans-serif', color: '#333' }}>
      {/* Image with full width */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/Kashmir-Special-Events.jpg`}   
          alt="Kashmir Special Events" 
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
          KASHMIR SPECIAL EVENTS
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
        Kashmir is not only known for its breathtaking natural beauty but also for its vibrant festivals celebrating culture, music, agriculture, and much more. The region hosts various events that attract both locals and tourists alike, offering a taste of the valley’s rich traditions and modern expressions.
        <br /><br />
        From music festivals to apple celebrations, the region is alive with excitement, bringing together art, music, and local produce. Explore the top events held throughout the year that showcase the diverse and lively spirit of Kashmir.
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
          TOP SPECIAL EVENTS IN KASHMIR
        </h2>

        {/* Large Section 1 - Kashmir Music Festival */}
        <div style={{
          backgroundColor: '#FFF9F0', 
          marginBottom: '50px', 
          padding: '50px', 
          borderRadius: '10px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/Kashmir-Music-Festival.jpg`} 
              alt="Kashmir Music Festival" 
              style={{ width: '80%', height: 'auto', borderRadius: '10px' }} 
            />
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
            Kashmir Music Festival
          </h3>
          <p style={{
            fontSize: '18px', 
            color: '#666', 
            lineHeight: '1.8', 
            marginBottom: '20px',
          }}>
            The Kashmir Music Festival is a celebration of traditional and modern music, bringing together renowned artists and performers from across the country. The festival features performances, workshops, and cultural events in various scenic venues across the valley.
          </p>
        </div>

        {/* Large Section 2 - Apple Festival */}
        <div style={{
          backgroundColor: '#FFF9F0', 
          marginBottom: '50px', 
          padding: '50px', 
          borderRadius: '10px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/Apple-Festival-Kashmir.jpg`}  
              alt="Apple Festival Kashmir" 
              style={{ width: '80%', height: 'auto', borderRadius: '10px' }} 
            />
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
            Apple Festival
          </h3>
          <p style={{
            fontSize: '18px', 
            color: '#666', 
            lineHeight: '1.8', 
            marginBottom: '20px',
          }}>
            The Apple Festival in Kashmir is an annual celebration dedicated to the region's world-famous apples. The event includes apple picking, orchard tours, and a variety of apple-based culinary delights, making it a fun experience for all ages.
          </p>
        </div>

        {/* Large Section 3 - Kashmir Flower Festival */}
        <div style={{
          backgroundColor: '#FFF9F0', 
          marginBottom: '50px', 
          padding: '50px', 
          borderRadius: '10px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/Kashmir-Flower-Festival.jpg`} 
              alt="Kashmir Flower Festival" 
              style={{ width: '80%', height: 'auto', borderRadius: '10px' }} 
            />
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
            Kashmir Flower Festival
          </h3>
          <p style={{
            fontSize: '18px', 
            color: '#666', 
            lineHeight: '1.8', 
            marginBottom: '20px',
          }}>
            Held every spring, the Kashmir Flower Festival celebrates the valley's natural beauty. Featuring a stunning array of flowers, including tulips, daisies, and orchids, this festival is a visual treat for visitors from around the world.
          </p>
        </div>

        {/* Large Section 4 - Sufi Music Festival */}
        <div style={{
          backgroundColor: '#FFF9F0', 
          marginBottom: '50px', 
          padding: '50px', 
          borderRadius: '10px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/Sufi-Music-Kashmir.jpg`} 
              alt="Sufi Music Festival Kashmir" 
              style={{ width: '80%', height: 'auto', borderRadius: '10px' }} 
            />
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
            Sufi Music Festival
          </h3>
          <p style={{
            fontSize: '18px', 
            color: '#666', 
            lineHeight: '1.8', 
            marginBottom: '20px',
          }}>
            The Sufi Music Festival in Kashmir celebrates the mystical music traditions of the region. It features performances by renowned Sufi singers and musicians, who bring spiritual and soulful melodies to life.
          </p>
        </div>

        {/* Large Section 5 - Apple Blossom Festival */}
        <div style={{
          backgroundColor: '#FFF9F0', 
          marginBottom: '50px', 
          padding: '50px', 
          borderRadius: '10px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/Apple-Blossom-Festival.jpg`} 
              alt="Apple Blossom Festival Kashmir" 
              style={{ width: '80%', height: 'auto', borderRadius: '10px' }} 
            />
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
            Apple Blossom Festival
          </h3>
          <p style={{
            fontSize: '18px', 
            color: '#666', 
            lineHeight: '1.8', 
            marginBottom: '20px',
          }}>
            Celebrate the beauty of spring during the Apple Blossom Festival in Kashmir. The event includes orchard tours, photography contests, and a chance to learn more about the region’s apple cultivation process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KashmirSpecialEvents;
