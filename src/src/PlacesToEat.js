import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './App.css'; // Adjust the path according to your project structure

function PlacesToEat() {
  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      margin: '0 auto',
      maxWidth: '800px',
      padding: '20px',
      color: '#4A5568',
      backgroundColor: '#F9FAFB',
    }}>
      <h1 style={{
        fontSize: '36px',
        color: '#2D3748',
        marginBottom: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #2D3748',
        paddingBottom: '10px',
      }}>
        Places to Eat
      </h1>

      <p style={{
        fontSize: '20px',
        color: '#4A5568',
        lineHeight: '1.6',
        marginBottom: '20px',
        textAlign: 'center',
        fontStyle: 'italic',
      }}>
        Discover the culinary gems of Kashmir where every meal is a delightful experience. From cozy cafes serving delightful brews to restaurants offering a fusion of flavors, there's something for everyone. Join us as we explore these inviting places to eat, each with its own unique charm and a promise of a memorable dining experience.
      </p>

      {/* Cafe Liberty Section */}
      <h2 style={{
        fontSize: '30px',
        color: '#2D3748',
        marginBottom: '10px',
        textAlign: 'center',
      }}>
        1. Cafe Liberty
        <a href="https://www.instagram.com/cafelibertykashmir/?hl=en" target="_blank" rel="noopener noreferrer" className="instagram-link" style={{
          color: '#E91E63', // Pinkish color for the icon
          marginLeft: '10px',
          transition: 'color 0.3s', // Smooth transition for hover
        }}>
          <FaInstagram />
        </a>
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
        <img
          src="/cafe.jpg"
          alt="Cafe Liberty"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0',
            border: '2px solid #2D3748',
          }}
        />
      </div>
      <div style={{
        backgroundColor: '#F4F4F4',
        padding: '20px',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1.6',
        marginBottom: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
      }}>
        Cafe Liberty in Srinagar, Kashmir is a cozy, welcoming cafe and restaurant that serves a variety of food, including: Italian food, Indian food, Fast food, Barbecue, and Breakfast. <br />
        <strong>Location:</strong> 309 3rd floor M A Road, opposite SP college Dr Alijan Shopping Complex, Srinagar 190001 <br />
        <strong>Hours:</strong> Open every day from 10:30 AM–10:30 PM <br />
        <strong>Features:</strong> Antique items and paintings, personalized lift, vegetarian friendly <br />
        <strong>Atmosphere:</strong> Cozy ambiance, modern aesthetics, and vintage vibe <br />
        <strong>Owner:</strong> Wafa Vakil, a pioneering female RJ from Kashmir <br />
        <strong>Named after:</strong> Bollywood director Imtiaz Ali, who is close friends with the Vakil family <br />
        <strong>Payment:</strong> Accepts cash, cards, and digital payments <br />
        <strong>Delivery:</strong> Available on Swiggy and Zomato <br />
        <strong>Parking:</strong> Free and paid parking lots
      </div>

      <div style={{
        borderBottom: '3px solid #E2E8F0',
        margin: '20px 0',
      }}></div>

      {/* Books & Bricks Cafe Section */}
      <h2 style={{
        fontSize: '30px',
        color: '#2D3748',
        marginBottom: '10px',
        textAlign: 'center',
      }}>
        2. Books & Bricks Cafe
        <a href="https://www.instagram.com/booksandbrickscafe/?hl=en" target="_blank" rel="noopener noreferrer" className="instagram-link" style={{
          color: '#E91E63', // Pinkish color for the icon
          marginLeft: '10px',
          transition: 'color 0.3s', // Smooth transition for hover
        }}>
          <FaInstagram />
        </a>
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
        <img
          src="/books and bricks.jpg"
          alt="Books & Bricks Cafe"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0',
            border: '2px solid #2D3748',
          }}
        />
      </div>
      <div style={{
        backgroundColor: '#F4F4F4',
        padding: '20px',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1.6',
        marginBottom: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
      }}>
        Books & Bricks Cafe is a vegetarian-friendly cafe in Srinagar, Kashmir, India that serves breakfast and lunch. Some say it's a must-visit for a quiet time and great food, and others say it's worth a detour from the regular tourist circuit.<br />
        <strong>Location:</strong> Gogji Bagh, opposite Amar Singh College, Srinagar 190008 <br />
        <strong>Hours:</strong> 7 AM–11:30 PM every day <br />
        <strong>Known for:</strong> Coffee, food, and unique ambiance <br />
        <strong>Features:</strong> Brick interiors, book pages on the walls, and books on the shelves <br />
        <strong>Payment:</strong> Credit cards, debit cards, and NFC mobile payments <br />
        <strong>Reviews:</strong> Some say the food is amazing, including the burger and chicken. Others say it's a cute cafe with a lovely quaint vibe.
      </div>

      <div style={{
        borderBottom: '3px solid #E2E8F0',
        margin: '20px 0',
      }}></div>

      {/* Winterfell Cafe Section */}
      <h2 style={{
        fontSize: '30px',
        color: '#2D3748',
        marginBottom: '10px',
        textAlign: 'center',
      }}>
        3. Winterfell Cafe
        <a href="https://www.instagram.com/winterfellcafeofficial/?hl=en" target="_blank" rel="noopener noreferrer" className="instagram-link" style={{
          color: '#E91E63', // Pinkish color for the icon
          marginLeft: '10px',
          transition: 'color 0.3s', // Smooth transition for hover
        }}>
          <FaInstagram />
        </a> 
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
        <img
          src="/winterfell.jpg"
          alt="Winterfell Cafe"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0',
            border: '2px solid #2D3748',
          }}
        />
      </div>
      <div style={{
        backgroundColor: '#F4F4F4',
        padding: '20px',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1.6',
        marginBottom: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
      }}>
        Winterfell Cafe is a popular cafe in Srinagar, Kashmir, India that serves coffee, tea, dessert, and a variety of food.<br />
        <strong>Location:</strong> Boulevard Road, opposite Ghat No 5, Srinagar 190001 <br />
        <strong>Hours:</strong> 10 AM–10 PM Mon–Thu, Sat–Sun; 9:30 AM–1 PM, 2–10 PM on Fri <br />
        <strong>Price range:</strong> ₹100–₹400 <br />
        <strong>Food:</strong> International, European, contemporary, and fast food, including Salisbury steak, Alfredo Penne, Pineapple Wrapped Chicken, and Chicken Mushroom Pot Pie <br />
        <strong>Features:</strong> A tribute to George R.R. Martin's Game of Thrones with themed decor, including house banners, wooden swords, a tree-shaped library, and a mock Iron Throne <br />
        <strong>Accessibility:</strong> Wheelchair accessible parking lot, but no wheelchair accessible entrance, restroom, or seating <br />
        <strong>Payment:</strong> Accepts checks, credit cards, debit cards, NFC mobile payments, and Google Pay
      </div>

      <div style={{
        borderBottom: '3px solid #E2E8F0',
        margin: '20px 0',
      }}></div>

      {/* Chai Jaai Section */}
      <h2 style={{
        fontSize: '30px',
        color: '#2D3748',
        marginBottom: '10px',
        textAlign: 'center',
      }}>
        4. Chai Jaai
        <a href="https://www.instagram.com/chaijaai/?hl=en" target="_blank" rel="noopener noreferrer" className="instagram-link" style={{
          color: '#E91E63', // Pinkish color for the icon
          marginLeft: '10px',
          transition: 'color 0.3s', // Smooth transition for hover
        }}>
          <FaInstagram />
        </a>
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
        <img
          src="/chai.jpg"
          alt="Chai Jaai"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0',
            border: '2px solid #2D3748',
          }}
        />
      </div>
      <div style={{
        backgroundColor: '#F4F4F4',
        padding: '20px',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1.6',
        marginBottom: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
      }}>
        Chai Jaai is a tea room in Srinagar, Kashmir that serves Indian food, breakfast, brunch, and more:<br />
        <strong>Location:</strong> 1st Floor, Mahattas Studio, The Bund Road, Munshi Bagh, Dhanibuoy building, Lal Chowk, Srinagar <br />
        <strong>Hours:</strong> 9 AM–9 PM every day <br />
        <strong>Known for:</strong> Authentic Kashmiri khava, noon chai, and artisanal breads <br />
        <strong>Features:</strong> Views of the Jehlum River, local handicrafts, and Pyāla brand of hand-painted tea and table ware <br />
        <strong>Accessibility:</strong> No wheelchair accessible entrance, parking lot, restroom, or seating
      </div>
    </div>
  );
}

export default PlacesToEat;
