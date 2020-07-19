import React, { Component } from "react";
import "./LandingPage.css";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import LogoSVG from "../images/logo.svg";
import Typography from "@material-ui/core/Typography";
import LandingCarousel from "./LandingCarousel";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import MenuDots from "../components/Menu-dots";
import Menu from "../components/Menu";
import { useMediaQuery } from "react-responsive";
import ReactSlickCarousel from '../components/desktop/ReactSlickCarousel'
import {Desktop} from '../functions/helperFunctions'
import {Mobile} from '../functions/helperFunctions'
import ReactSwipeLandingCarousel from './ReactSwipeLandingCarousel'

const useStyles = makeStyles({
  title: {
    fontSize: "6vw",
    fontFamily: "LahiruFont",
    paddingTop: '3vh'
    // wordSpacing: 10
  },
  container: {
    // border: '10px solid black',
    textAlign: "center",
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    // paddingTop: "2vh",
  },
  carousel: {
    // padding: '10vh'
  },
  mobile: {
    padding: "",
  },
  desktop: {
    // border: '10px solid red'
    // paddingTop: "20vh",
  },
  dots: {
    marginLeft: '85vw',
    // float: 'right',
    paddingTop: '2vh'

  }
});

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 991 });
//   return isMobile ? children : null;
// };

// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 });
//   return isDesktop ? children : null;
// };

function Logo() {
  return (
    <img style={{ height: "12vw", margin: 0, marginTop: '5vh' }} src={LogoSVG} />
  );
}

function LandingPageHeader() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.dots}><MenuDots/></div>
        {/* <div className={classes.dots}><Menu/></div> */}
        {/* <div className={classes.dots}><MenuIcon/></div> */}
        <Logo />
        <Typography className={classes.title}>
          Treasurebox Photography
        </Typography>
        {/* <Menu /> */}
      </Container>
    </div>
  );
}

export default function LandingPage() {
  const classes = useStyles();
  return (
    // <div className="LandingPage">
    <div>
      <Mobile className={classes.mobile}>
        <LandingPageHeader />
        {/* <ReactSwipeLandingCarousel/> */}
        <ReactSlickCarousel />
        {/* <LandingCarousel /> */}
      </Mobile>
      {/* <div className={classes.carousel}> */}
      <Desktop>
        <div className={classes.desktop}>
          <ReactSlickCarousel />
          {/* <LandingCarousel /> */}
        </div>
      </Desktop>
    </div>
    // </div>
    // </div>
  );
}
