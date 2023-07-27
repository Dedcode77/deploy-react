/* eslint-disable jsx-a11y/alt-text */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Consult from '../assets/consult.png'
import Hora from '../assets/hora.png'
import Nurse from '../assets/nurse.png'


import "./Services.css";

function Service() {
  return (
    <Container  >
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={6} className='pt-4' >
         <h1>Why Choose Our
            <br/>Clinic ?
         </h1>
         <h6 className='m-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/>
         sed diam nonumy eirmod tempor Lorem ipsum dolor sit 
         <br/>amet consetetur sadipscing elitr</h6>
         <Row xs={2} md={4} lg={4} className='pt-4'>
        <Col><h1>23</h1>
        Best Doctors
        </Col>
        <Col><h1>3</h1>
        Clinics Locations
        </Col>
      </Row>
      <Row xs={2} md={4} lg={4}>
        <Col><h1>150+</h1>
        Patients Capacity
        </Col>
        <Col><h1>1900+</h1>Patients Cured</Col>
      </Row>
      
        </Col>
        
        <Col xs={6} md={4}   >

        <Card className='card221 border-0' style={{bottom:'-5%' }}   >
        <Card.Body>
          <Card.Title><img src={Consult} /></Card.Title>
          <Card.Subtitle className="mb-2  pt-5"><h5>Get Free Consultation</h5></Card.Subtitle>
          <Card.Text>
          Lorem ipsum dolor sit amet,
          <br/> consetetur sadipscing elitr, sed 
          <br/>diam nonumy eirmod tempor
          </Card.Text>
        </Card.Body>
      </Card>
      <br/>
       
      <Row>
        <Col md={{ span: 4, offset: 4 }}>   
        <Card  style={{right:'-130%',bottom:'40%' }}  className=" card221 m-2 border-0"   >
        <Card.Body>
          <Card.Title><img src={Hora} /></Card.Title>
          <Card.Subtitle className="mb-2 pt-5"><h5>24 Hours Service</h5></Card.Subtitle>
          <Card.Text>
          Lorem ipsum dolor sit amet,
          <br/> consetetur sadipscing elitr, sed 
          <br/>diam nonumy eirmod tempor
          </Card.Text>
        </Card.Body>
      </Card></Col>
      </Row>
       
   

    
      <br />

      <Card  className='card221 border-1'   style={{bottom:'25%' }}>
        <Card.Body >
          <Card.Title><img src={Nurse} /></Card.Title>
          <Card.Subtitle className="mb-2 pt-5"><h5>Qualified Doctors</h5></Card.Subtitle>
          <Card.Text>
          Lorem ipsum dolor sit amet,
          <br/> consetetur sadipscing elitr, sed 
          <br/>diam nonumy eirmod tempor
          </Card.Text>
        </Card.Body>
      </Card>
      <br />


        </Col>
      </Row>
    </Container>
  );
}

export default Service;