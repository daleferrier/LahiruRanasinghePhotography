import React, {Component, createRef, useRef, useState, useEffect} from 'react';
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'
import './App.css';
import LandingPage from './components/LandingPage';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import TestimonialForm from './components/TestimonialForm';
import Pricing from './components/Pricing';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import LogoSVG from "./images/logo.svg";
import {makeStyles} from  '@material-ui/core/styles'
import { useMediaQuery } from "react-responsive";
import ReactSlickCarousel from './components/desktop/ReactSlickCarousel';


const useStyles = makeStyles({
   padding:{
     paddingTop: '64px'
   }
})

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

function Logo() {
  return (
    <Mobile ><img className='App-logo-svg' src={LogoSVG} /></Mobile >
  );
}
export default function App(props) {
  const classes = useStyles()
  const landingRef = useRef();
  const navRef = useRef();
  const [position, setPosition] = useState(navRef.offsetTop);
  const[myPadding, setPadding]=useState(0)
  
  const scrollListener = () => {
    if (navRef.current.offsetTop != 0) {
      setPosition(navRef.current.offsetTop);
    }
  
    const landing = landingRef.current;
    const isTop = document.body.scrollTop >= position;
    // const isTop = window.scrollY >= position;
    
    if (isTop) {
      console.log(isTop)
      landing.classList.add('padding');
    } else {
      landing.classList.remove('padding');
    }
  };
  

  // useEffect(() => {
  //   document.body.addEventListener("scroll", scrollListener);
  //   // window.addEventListener("scroll", scrollListener);
  //   return () => { 
  //     document.body.removeEventListener('scroll', scrollListener);
  //     // window.removeEventListener('scroll', scrollListener);
  //   };
  // });

    return (
      <div className="App">
        {/* <div>
          <ReactSlickCarousel/>
        </div> */}
        <div className="Tabs">{/* <Tabs/> */}</div>
        <div className="NavAndLandingPage" id="landing">
          <div className="App-logo">{/* <Logo /> */}</div>

          <div className="App-Navigation" ref={navRef}>
            <Navigation />
          </div>
          <div ref={landingRef} className="landingPage">
            <LandingPage />
          </div>
        </div>
        <div className="App-ProfilePage" id="profile">
          <ProfilePage />
        </div>
        <div className="App-gallery" id="gallery">
          <Gallery />
        </div>
        <div className="App-testimonials" id="testimonials">
          <Testimonials />
        </div>
        {/* <div className="App-review" id="review"> 
          <TestimonialForm />
        </div> */}
        <div className="App-pricing" id="pricing">
          <Pricing />
        </div>
        <div className="App-Contact" id="contact">
          <ContactForm />
        </div>
        <Switch>
          {/* <Route exact path="/gallery" render={() => <Gallery/>} /> */}
          {/* <Route exact path="/" render={() => <LandingPage />} /> */}
          <Route exact path="/gallery" />
          <Route exact path="/landing" />
          <Route exact path="/pricing" />
          <Route exact path="/testimonials" />
          <Route exact path="/profile" />
          <Route exact path="/contact" />
          <Route exact path="/review" />
          {/* <Route exact path="/review" render={() => <TestimonialForm />} /> */}
        </Switch>
      </div>
    );
  }

