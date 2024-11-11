import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './App.css'; // Adjust the path according to your project structure

function fineDining() {
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
        Fine Dining 
      </h1>

      <p style={{
        fontSize: '20px',
        color: '#4A5568',
        lineHeight: '1.6',
        marginBottom: '20px',
        textAlign: 'center',
        fontStyle: 'italic',
      }}>
        Fine dining in Kashmir offers a rich blend of local culinary traditions, showcasing the region's unique flavors and royal heritage. The Kashmiri cuisine, especially the traditional Wazwan, is famous for its intricate and aromatic dishes. Here are some aspects of fine dining in Kashmir.
      </p>

      {/* Cafe Liberty Section */}
      <h2 style={{
        fontSize: '30px',
        color: '#2D3748',
        marginBottom: '10px',
        textAlign: 'center',
      }}>
        1. Wazwan
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
          src="/wazwan.jpg.jpg"   
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
        Wazwan is the epitome of Kashmiri fine dining. It is a multi-course meal, often served at weddings and special occasions, prepared by skilled chefs known as Wazas.<br/>
        The feast typically includes a variety of dishes, such as Rogan Josh (spicy lamb dish), Gushtaba (meatballs in rich gravy), Yakhni (yogurt-based lamb dish), and Tabakh Maaz (fried lamb ribs).<br/>
        The meal is often complemented by Kashmiri Pulao (rice with dry fruits), Sheermal (sweet flatbread), and Kashmiri Roti.Cafe Liberty in Srinagar, Kashmir is a cozy, welcoming cafe and restaurant that serves a variety of food, including: Italian food, Indian food, Fast food, Barbecue, and Breakfast. <br />
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
        2. Kahwa
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
          src="/kahwaa.jpg"
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
        Kahwa is traditionally brewed by steeping the green tea leaves along with saffron strands, cardamom, and other spices. The mixture is simmered and then served hot, usually garnished with slivers of almonds or walnuts. The drink is often sweetened with sugar or honey, depending on personal taste, although the traditional Kashmiri version is not overly sweet.Books & Bricks Cafe is a vegetarian-friendly cafe in Srinagar, Kashmir, India that serves breakfast and lunch. Some say it's a must-visit for a quiet time and great food, and others say it's worth a detour from the regular tourist circuit.<br />
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
        3. Mirch Ka Salan
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
          src="/mirch.jpg"
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
        Mirch Ka Salan is a popular and flavorful dish in Kashmiri cuisine, known for its spicy and tangy flavor profile. The name "Mirch" refers to green chilies, and "Salan" means gravy or curry in Urdu, making it a dish primarily consisting of chilies cooked in a rich and aromatic gravy. This dish is a beloved part of the Kashmiri Wazwan and can be found in many restaurants serving traditional Kashmiri food.Winterfell Cafe is a popular cafe in Srinagar, Kashmir, India that serves coffee, tea, dessert, and a variety of food.<br />
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

export default fineDining;
