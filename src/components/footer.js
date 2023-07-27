/* eslint-disable jsx-a11y/alt-text */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Pic from '../assets/pic.png';
import Ponts from '../assets/ponts.png';

import './footer.css';


function ContainerFluidExample() {
  return (
    <footer>
      
      <Container fluid>
        
        <Row>
          <Col sm  xs={6}>
          <Card className='tr' style={{ width: '18rem'}}>
        <Card.Body>
           <Form >
              <h4 className='p-2'>Book an appointment</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" className="bg-light" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" className="bg-light"/>
        </Form.Group>
        <Form.Select className="bg-light text-muted mb-3" >
        <option >Select Doctor</option>
        <option value="1">Raul</option>
        <option value="2">Marcus</option>
        <option value="3">Wrench</option>
      </Form.Select>
      <Form.Select type="date" className="bg-light text-muted mb-3" >
        <option>Select Date</option>
        <option type="date" value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
       
        <Button variant="primary" type="submit" >
          Book Now
        </Button>
      </Form>
        </Card.Body>
      </Card>
  
          </Col>
          
          <Col  sm lg={4} className='text' ><h1 className='text-dark pt-4 '> Lorem ipsum dolor 
      <br/>sit amet, consetetur</h1>
      Lorem ipsum dolor sit amet, consetetur sadipscing 
      <br/>elitr, sed diam nonumy eirmod tempor Lorem
      <br/> ipsum dolor sit amet consetetur sadipscing elitr  </Col>
      <Col sm>  
      
      
     <img className='img1' src={Pic} />
     <img  src={Ponts}  className='img2 '/>
    
      </Col>
      
        </Row>
        <span className='copyright'> Created by Octet Design Studio</span>
    
       
      </Container>
     
    </footer>
    
  );
}

export default ContainerFluidExample;
  
 