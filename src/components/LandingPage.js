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
import Menu from "../components/Menu";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles({
  title: {
    fontSize: "6vw",
    fontFamily: "LahiruFont",
    // wordSpacing: 10
  },
  container: {
    // border: '10px solid black',
    textAlign: "center",
    paddingTop: "6vh",
  },
  carousel: {
    // padding: '10vh'
  },
  mobile: {
    padding: "",
  },
  desktop: {
    // border: '10px solid red'
    paddingTop: "20vh",
  },
});

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

function Logo() {
  return (
    <img style={{ height: "12vw", margin: 0, padding: 0 }} src={LogoSVG} />
  );
}

function LandingPageHeader() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
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
        <LandingCarousel />
      </Mobile>
      {/* <div className={classes.carousel}> */}
      <Desktop>
        <div className={classes.desktop}>
          <LandingCarousel />
        </div>
      </Desktop>
    </div>
    // </div>
    // </div>
  );
}
