import React, {Component, createRef, useRef, useState, useEffect} from 'react';
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './components/LandingPage';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import TestimonialForm from './components/TestimonialForm';
import Pricing from './components/Pricing';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import LogoSVG from "./images/logo.svg";
import {makeStyles} from  '@material-ui/core/styles'

const useStyles = makeStyles({
   padding:{
     paddingTop: '64px'
   }
})

function Logo() {
  return (
    <img className='App-logo-svg' src={LogoSVG} />
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
    const isTop = window.scrollY >= position;
    
    if (isTop) {
      console.log(isTop)
      landing.classList.add('padding');
    } else {
      landing.classList.remove('padding');
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => { 
      window.removeEventListener('scroll', scrollListener);
    };
  });

    return (
      <div className="App">
        <div className="NavAndLandingPage" id="landing">
          <div className="App-logo">
            <Logo />
          </div>
          <div className="App-Navigation" ref={navRef}>
            <Navigation />
          </div>

          {/* <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Route exact path="/gallery" render={() => <Gallery />} />
            <Route exact path="/pricing" render={() => <Pricing />} />
            <Route exact path="/testimonials" render={() => <Testimonials />} />
            <Route exact path="/profile" render={() => <ProfilePage />} />
            <Route exact path="/contact" render={() => <ContactForm />} />
            <Route exact path="/review" render={() => <TestimonialForm />} />
          </Switch> */}
          <div ref={landingRef}>
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
        <div className="">{/* <TestimonialForm/> */}</div>
        <div className="App-pricing" id="pricing">
          <Pricing />
        </div>
        <div className="App-Contact" id="contact">
          <ContactForm />
        </div>

        <Switch>
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

