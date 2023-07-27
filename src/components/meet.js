import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testimage from '../assets/not.png';
import Motimage from '../assets/mot.png';
import Yotimage from '../assets/yot.png';
import Moiimage from '../assets/moi.png';
import Toiimage from '../assets/toi.png';
import Card from 'react-bootstrap/Card';
import './meet.css';

function Meet(){
    return(
        <div>
        <h1 style={{fontWeight:'bold'}}>Meet Our Great Doctors</h1>
        <div className="container" >
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br />
            eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr
          </p>
          <br />
  
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card className=" card11 border-0" style={{ width: '100%' ,left:'10%'}}>
                <Card.Body>
                  <Card.Title>
                    <img src={Testimage} alt="not" />
                  </Card.Title>
                  <div className="image-column1">
                    <div className="title1">
                      <h4>DR.Lindsey Botosh</h4>
                      pediatician
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
  
            <Col xs={12} sm={6} md={4}>
              <Card className="card11 border-0" style={{ width: '100%',left:'10%' }}>
                <Card.Body>
                  <div className="image-column2">
                    <img src={Yotimage} alt="yot" />
                    <div className="title2">
                      <h4>Dr.jon Doe</h4>
                      Dentist
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
  
            <Col xs={12} sm={6} md={4}>
              <Card className="card11 border-0" style={{ width: '100%',left:'10%' }}>
                <Card.Body>
                  <div className="image-column3">
                    <img src={Motimage} alt="mot" />
                    <div className="title3">
                      <h4>DR.Lindney Botosh</h4>
                      Cardiologist
                    </div>
                    <div className="title5 ttl">
                      <img src={Toiimage} alt="toi" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="title4">
                <img src={Moiimage} alt="moi" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  
    
}
export default Meet;