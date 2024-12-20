import React from 'react';

function CabinsAndCottages() {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      color: '#333',
      padding: '20px 50px',
      fontFamily: '"Montserrat", sans-serif',
      lineHeight: '1.6',
      textAlign: 'center',
      minHeight: '100vh',
    }}>
      {/* Full-width Header Image */}
      <div style={{
        width: '100%',
        marginBottom: '30px',
      }}>
        <img
          src="/reception.jpg" // Ensure this image is placed in your public folder
          alt="Reception"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Heading Section */}
      <h1 style={{
        fontSize: '60px',
        fontWeight: '700',
        color: '#2D3748',
        fontFamily: 'Georgia, serif',
        marginBottom: '20px',
        marginTop: '20px',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
      }}>
        Winter Getaways that will Conquer Your Cabin Fever
      </h1>

      {/* Additional Paragraph Section */}
      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        color: '#333',
        margin: '40px auto',
        textAlign: 'left',
        maxWidth: '80%',
        padding: '0 30px',
        fontFamily: '"Georgia", serif'
      }}>
        When it gets chilly outside and you're dreaming of beaches and sunshine, it might be time for an escape. Check out some of Kashmir's cozy places to stay in cities and towns with plenty of things to do inside and out.
      </p>

      {/* Resort Sections */}
      <ResortSection 
        title="1. The Khyber Himalayan Resort & Spa"
        imageSrc="/khyber.jpg"
        overview="The Khyber Himalayan Resort & Spa is a luxury ski resort situated at an altitude of 8,825 feet, offering breathtaking views of the surrounding mountains and lush landscapes. The resort features a total of 85 rooms, each designed to provide a blend of comfort and elegance."
        videoLink="https://www.youtube.com/watch?v=example" 
        thumbnailSrc="https://img.youtube.com/vi/yRbrEnbiA-o/maxresdefault.jpg"
      />

      <ResortSection 
        title="2. Lchang Nang Retreat - THE HOUSE OF TREES"
        imageSrc="/Lchang.jpg"
        overview="Lchang Nang Retreat - The House of Trees is a unique and serene accommodation option located in the picturesque region of Ladakh, India. This retreat is designed to provide guests with an immersive experience in nature while offering a blend of comfort and traditional hospitality."
        videoLink="https://youtu.be/qwV3lMfCHvw?si=afXt4BBCZumjSnup"
        thumbnailSrc="https://img.youtube.com/vi/qwV3lMfCHvw/maxresdefault.jpg"
      />

      <ResortSection 
        title="3. Katra Marriott Resort & Spa"
        imageSrc="/marriott.jpg"
        overview="The Katra Marriott Resort & Spa is a luxury hotel located in the heart of Katra, Jammu, offering a perfect blend of comfort and hospitality. The resort is known for its exquisite dining options, rejuvenating spa treatments, and breathtaking views of the surrounding mountains."
        videoLink="https://youtu.be/D-qPnpME5uU?si=h1TYm2kRPMMlEYGD"
        thumbnailSrc="https://img.youtube.com/vi/D-qPnpME5uU/maxresdefault.jpg"
      />
    </div>
  );
}

// Separate component for each resort
function ResortSection({ title, imageSrc, overview, videoLink, thumbnailSrc }) {
  return (
    <>
      <h2 style={{
        fontSize: '36px',
        fontWeight: '700',
        color: '#2D3748',
        fontFamily: 'Georgia, serif',
        marginBottom: '10px',
        marginTop: '40px',
        textAlign: 'center',
      }}>
        {title}
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
      }}>
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: '80%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>

      <div style={{
        backgroundColor: '#F4F4F4',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
        width: '80%',
        margin: '0 auto',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1.8',
        color: '#4A5568',
        fontFamily: 'Georgia, serif',
      }}>
        <strong style={{ fontSize: '20px', color: '#2D3748', fontFamily: 'Georgia, serif' }}>Overview:</strong><br />
        {overview}
      </div>

      <div style={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <a
          href={videoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            position: 'relative',
            display: 'inline-block',
            borderRadius: '10px',
          }}
        >
          <img
            src={thumbnailSrc}
            alt={`${title} Video Thumbnail`}
            style={{
              width: '80%',
              height: 'auto',
              borderRadius: '10px',
            }}
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '50%',
            padding: '20px',
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}

export default CabinsAndCottages;
