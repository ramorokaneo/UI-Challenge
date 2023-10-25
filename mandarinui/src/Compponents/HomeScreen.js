import React from 'react';
import './HomeScreen.css';
import backgroundImage from './Images/theimage.jpg';
import logo from './Images/Logo.png'; 
import basketIcon from './Images/shopping-bag.png';
import customImage from './Images/2.png'; 
import importedIcon from './Images/computer-mouse.png';


function HomeScreen() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    position: 'relative',
  };

  const contentStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '125%', // Adjust as needed to cover the left side
    height: '100%',
    background: 'radial-gradient(circle at right, transparent 45%, #808080 1%)', // Circular mask with a "C" shape
  };

  const textContainerStyle = {
    width: '10%', // Adjust the width as needed
    height: '6.5%',
    float: 'left',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px', // Add padding for spacing
  };

  const textStyle = {
    color: '#fff', // Text color
    fontSize: '20px', // Text size
  };

  const logoStyle = {
    background: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat', // Prevent logo from repeating
    width: '5%', // Adjust the logo size as needed
    height: '6.5%',
    float: 'left',
  };

  const navListStyle = {
    listStyle: 'none',
    padding: 0,
    position: 'absolute',
    top: '-15px', // Adjust the top position
    left: '850px', // Align to the right
    zIndex: 2, // Place the list on top of the overlay
    display: 'flex',
  };

  const navItemStyle = {
    margin: '30px 40px', // Add margin between list items
    color: '#fff',
    fontSize: '26px',
    justifyContent: 'space-between',
  };

  const basketContainerStyle = {
    width: '90px', // Adjust the size of the circle
    height: '90px',
    // background: '', // Background color of the circle
    borderRadius: '50%', // Make it a circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const basketIconStyle = {
    width: '30px', // Adjust the size of the icon
    height: '30px',
  };

  const dotsContainerStyle = {
    width: '20px', // Adjust the size of the container
    height: '100%',
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Ensure it's above the overlay
    zIndex: 3, // Set a higher z-index for the dots
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    background: '#fff', // White color
    borderRadius: '50%', // Make it a circle
    margin: '5px 0', // Adjust the margin between dots
  };

  const imageContainerStyle = {
    position: 'absolute',
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-125%, -50%)', // Center both horizontally and vertically
  };

  const imageStyle = {
    width: '650px', // Adjust the size as needed
    height: '650px',
  };

  const bottomTextContainerStyle = {
    position: 'absolute',
    bottom: '15px', // Adjust the bottom position
    left: '30px', // Adjust the left position
    zIndex: 3, // Set a higher z-index
    color: '#fff', // Text color
    fontSize: '20px', // Text size
  };

  const headerTextContainerStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(10%, -70%)',
    textAlign: 'center',
  };

 const headerTextStyle = {
    color: '#fff',
    fontSize: '60px',
    display: 'flex',
    flexDirection: 'column', // Display the text in a column
    alignItems: 'center',
    zIndex: 4, // Ensure the text appears on top
  };
  
  const headerTextRowStyle = {
    display: 'flex',
    flexDirection: 'column', // Display the text in a column
    alignItems: 'center',
  };
  
  const headerTextWordStyle = {
    margin: '5px',
  };

  const paragraphStyle = {
    position: 'absolute',
    top: '50%', // Adjust the top position
    left: '1000px', // Adjust the left position
    zIndex: 3, // Set a higher z-index
    color: '#fff', // Text color
    fontSize: '18px', // Text size
    maxWidth: '500px', // Limit the paragraph width
  };

  const buttonTextContainerStyle = {
    position: 'absolute',
    top: '60%', // Adjust the top position
    left: '1000px', // Adjust the left position
    zIndex: 4, // Set a higher z-index
    color: '#fff', // Text color
    fontSize: '36px', // Text size
  };

  const buttonStyle = {
    position: 'absolute',
    top: '70%', // Adjust the top position
    left: '1000px', // Adjust the left position
    zIndex: 4, // Set a higher z-index
    // backgroundColor: 'rgba(0, 0, 0, 0.4)', // Background color of the overlay
    color: '#fff', // Text color
    fontSize: '24px', // Text size
    padding: '10px 20px',
    border: '2px solid #fff', // Thick border with white color
    borderRadius: '30px', // Curved edges
    cursor: 'pointer',
  };

  const mouseContainerStyle = {
    width: '90px', // Adjust the size of the circle
    height: '90px',
    // background: '', // Background color of the circle
    // borderRadius: '50%', // Make it a circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mouseIconStyle = {
    width: '30px', // Adjust the size of the icon
    height: '30px',
  };

  return (
    <div className="background-image" style={containerStyle}>
      <div style={contentStyle}>
        <div style={logoStyle}></div>
        <div style={textContainerStyle}>
          <div style={textStyle}>MANDARIN</div>
        </div>
      </div>
      <div style={dotsContainerStyle}>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
      </div>
      <ul style={navListStyle}>
        <li style={navItemStyle}>HOME</li>
        <li style={navItemStyle}>ABOUT</li>
        <li style={navItemStyle}>HISTORY</li>
        <li style={navItemStyle}>SALE</li>
        <li style={{ ...navItemStyle, margin: '30px 80px' }}>CONTACT</li>
        <div style={basketContainerStyle}>
          <img src={basketIcon} alt="Basket" style={basketIconStyle} />
        </div>
      </ul>
      <div style={imageContainerStyle}>
        <img src={customImage} alt="customImage" style={imageStyle} />
      </div>
      <div style={headerTextContainerStyle}>
        <div style={headerTextStyle}>
          <div style={headerTextRowStyle}>
            <div style={headerTextWordStyle}>USEFUL</div>
            <div style={headerTextWordStyle}>DELICIOUS</div>
            <div style={headerTextWordStyle}>MANDARIN</div>
          </div>
        </div>
      </div>
      <div style={paragraphStyle}>
        Fruits perfectly preserve vitamin C with long storage. Mandarins ripen in November and December, providing a source of vitamins during the winter months for those living in the northern hemisphere.
      </div>
      <div style={buttonTextContainerStyle}>$ 1,56</div>
      <div style={buttonStyle}>ADD TO CART</div>
      <div style={mouseContainerStyle}>
        <img src={importedIcon} alt="importedIcon" style={mouseIconStyle} />
      </div>
      <div style={bottomTextContainerStyle}>001</div>
    </div>
  );
}

export default HomeScreen;
