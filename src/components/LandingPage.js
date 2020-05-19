import React, {Component} from 'react';
import './LandingPage.css'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../images/logo.svg'
import Image from "react-bootstrap/Image";
import LandingCarousel from './LandingCarousel';

// class LandingPage extends Component{
  export default function LandingPage(props){
    // render(){
        return (
          <div
            className="LandingPage"
          >
            {/* <div className='LandingPage-logo'> */}
            {/* <img src={Logo}/>
              <p>TREASUREBOX PHOTOGRAPHY</p> */}
            {/* </div> */}
            <LandingCarousel />
          </div>
        );
    }
// }

// export default LandingPage;