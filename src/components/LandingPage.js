import React, {Component} from 'react';
import './LandingPage.css'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../images/logo.JPG'
import Image from "react-bootstrap/Image";
import LandingCarousel from './LandingCarousel';

class LandingPage extends Component{
    render(){
        return (
          <div className="LandingPage">
            {/* <Jumbotron className="LandingPage-jumbotron" fluid>
            </Jumbotron> */}
            {/* <Container className='LandingPage-logo' fluid> */}
              {/* <img src={Logo} alt="" srcset="" /> */}
                <LandingCarousel/>
            {/* </Container> */}

            {/* <Container fluid className='LandingPage-container'>
                <Row className='LandingPage-row'>
                    <Col fluid className="LandingPage-picture" xs={12} md={6}>
                        <div><img src={Picture}/></div>
                    </Col>
                    <Col className="LandingPage-text" xs={12} md={6}>
                      Treasurebox Photography
                    </Col>
                </Row>
              </Container> */}
          </div>
        );
    }
}

export default LandingPage;