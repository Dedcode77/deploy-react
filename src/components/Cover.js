// Cover.jsx
import React from 'react';
import '../assets/css/Cover.css';
import logo from '../assets/images/logo.png';
import pattern from '../assets/images/pattern.png';
//import intersection from '../assets/images/intersection9.png';
//import section from '../assets/images/section.png';
//import designcircles from '../assets/images/design-circles.png';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import card5 from '../assets/images/card5.png';
import card6 from '../assets/images/card6.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
//import Card from 'react-bootstrap/esm/Card';




function Cover() {
  // The main component for the cover section of the website
  return (
<header>

<Container fluid className='headers'>
  
<Row>
        <Col sm>
        <Col sm><img src={logo} alt="Logo" className="logo p-4" />
        <br/>
        </Col >
       <Col sm  className="write "  >
        <p> <h1 style={{textAlign:'left',marginLeft:'30%', fontWeight:'bold'}}>Complete Health<br/>Care Solution for<br/>Everyone</h1></p>
      
         {/* Sub headline */}
      <p style={{textAlign:'left',marginLeft:'30%'}}>Lorem ipsum dolor sit amet, consectetur<br/>
      adipiscing elit, sed do eiusmod tempor incididunt<br />
      ut labore et dolore magna aliqua.
      </p>
      <p>
      <Button variant="primary" style={{width:'20%', float:'left', marginLeft:'30%'}}>Book Now</Button>
      </p>

       </Col>
       {/* Call-to-action button */}
      
        </Col>
        <Col sm > <img src={pattern} alt="Pattern" className="pattern" /></Col>

      </Row>
</Container>
<div className='container'>
<div className="card-section">
  <Row>
    <Col xs={5}>
    <h1 style={{textAlign:'left',fontWeight:'bold'}}>Quality care for you and <br/>
    The Once you loved</h1>
    <p style={{textAlign:'left'}} className='text2 pt-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/>
     sed diam nonumy eirmod tempor Lorem ipsum dolor sit 
     <br/>amet consetetur sadipscing elitr</p>
    </Col>
    <Col>
    <img src={card1} alt="Card1" className="card1" />
    </Col>
<Col>
<img src={card2} alt="Card2" className="card2" />
</Col>
  </Row>
    <div>

    <Row xs={{ cols: 4 }} className='colone'>

<Col ><img src={card3} alt="Card3" className="card3" /></Col>

<Col > <img src={card4} alt="Card4" className="card4" /></Col>

<Col ><img src={card5} alt="Card5" className="card5"  /></Col>

<Col ><img src={card6} alt="Card6" className="card6" /></Col>

</Row>
   

    
    
    
   
    
   
    
     
    
    </div>
    
    </div>
</div>
</header> 
  );
}

export default Cover;