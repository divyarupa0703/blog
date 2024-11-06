import React from 'react';

function FineDining() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Montserrat", sans-serif', color: '#333' }}>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/FineDining2.jpg`}  // Replace with an actual image link
          alt="Fine Dining Experience" 
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
          Fine Dining
        </h1>
      </div>

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
        Fine dining restaurants offer a sophisticated atmosphere with high-end cuisine, impeccable service, and elegant decor. These restaurants typically focus on gourmet meals, often featuring premium ingredients and fine wines to match.
      </p>
    </div>
  );
}

export default FineDining;
