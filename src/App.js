import React, {Component} from 'react';
import Navigation from './components/Navigation'
import LandingCarousel from './components/LandingCarousel';
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

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="App-Navigation">{/* <Navigation /> */}</div>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/gallery" render={() => <Gallery />} />
          <Route exact path="/pricing" render={() => <Pricing />} />
          <Route exact path="/testimonials" render={() => <Testimonials />} />
          <Route exact path="/profile" render={() => <ProfilePage />} />
          <Route exact path="/contact" render={() => <ContactForm />} />
          <Route exact path="/review" render={() => <TestimonialForm />} />
        </Switch>
        <div>{/* <LandingPage/> */}</div>
        <div className="">{/* <LandingCarousel/> */}</div>
        <div className="">
          <ProfilePage />
        </div>
        <div className="">{/* <Gallery/> */}</div>
        <div className="">{/* <ContactForm/> */}</div>
        <div className=""><Testimonials/></div>
        <div className="">{/* <TestimonialForm/> */}</div>
        <div className=""><Pricing/></div>
      </div>
    );
  }
}

export default App;
