import React, {
  Component,
  createRef,
  useRef,
  useState,
  useEffect,
} from "react";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import TestimonialForm from "./components/TestimonialForm";
import Pricing from "./components/Pricing";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import LogoSVG from "./images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";
import NavigationIndividual from "./components/NavigationIndividual";
import { Mobile } from "./functions/helperFunctions";
import { Desktop } from "./functions/helperFunctions";
import Fab from "@material-ui/core/Fab";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles({
  padding: {
    paddingTop: "64px",
  },
  label: {},
});

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 991 });
//   return isMobile ? children : null;
// };

function Logo() {
  return (
    <Mobile>
      <img className="App-logo-svg" src={LogoSVG} />
    </Mobile>
  );
}

function HomePageComponents() {
  return (
    <div>
      {/* <Navigation /> */}
      <LandingPage />
      <div style={{}}>
        <ProfilePage />
      </div>
      <Pricing />
      <Testimonials />
    </div>
  );
}

function FloatingButton() {
  const classes = useStyles();
  return (
    <div>
      <Desktop>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          style={{
            zIndex: 2,
            position: "fixed",
            bottom: "5px",
            right: "5px",
            fontSize: "20px",
            height: "60px",
            boxShadow: "-2px 11px 22px 5px rgba(0,0,0,0.54)",
            background: "white",
          }}
          classes={{
            label: classes.label,
          }}
        >
          {/* <AddIcon /> */}
          {/* Add Review */}
          <Link
            smooth={false}
            to="/contact/#contact"
            style={{ color: "black" }}
          >
            <MailOutlineIcon style={{ margin: "0px 10px 4px 0px" }} />
            Get in touch
          </Link>
        </Fab>
      </Desktop>
      <Mobile>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          style={{
            zIndex: 2,
            position: "fixed",
            bottom: "5px",
            right: "5px",
            fontSize: "17px",
            height: "40px",
            boxShadow: "-2px 11px 22px 5px rgba(0,0,0,0.54)",
            background: "white",
          }}
          classes={{
            label: classes.label,
          }}
        >
          {/* <AddIcon /> */}
          {/* Add Review */}
          <Link
            smooth={false}
            to="/contact/#contact"
            style={{
              color: "black",
              outline: "none",
              textDecoration: "none",
              wordSpacing: "-2px",
            }}
          >
            <MailOutlineIcon style={{ margin: "0px 5px 2px 0px" }} />
            Get in touch
          </Link>
        </Fab>
      </Mobile>
    </div>
  );
}

export default function App(props) {
  const classes = useStyles();
  const landingRef = useRef();
  const navRef = useRef();
  const [position, setPosition] = useState(navRef.offsetTop);
  const [myPadding, setPadding] = useState(0);

  const scrollListener = () => {
    if (navRef.current.offsetTop != 0) {
      setPosition(navRef.current.offsetTop);
    }

    const landing = landingRef.current;
    const isTop = document.body.scrollTop >= position;
    // const isTop = window.scrollY >= position;

    if (isTop) {
      console.log(isTop);
      landing.classList.add("padding");
    } else {
      landing.classList.remove("padding");
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
      {/* <div className="Tabs"><Tabs/></div>
        <div className="NavAndLandingPage" id="landing">
          <div className="App-logo"><Logo /></div> */}

      <div className="App-Navigation" ref={navRef}>
        {/* <ReactSwipe/> */}
        <Navigation />
        <FloatingButton />
      </div>
      {/* <div ref={landingRef} className="landingPage">
            <LandingPage />
          </div>
        </div> */}
      {/* <div className="App-ProfilePage" id="profile">
          <ProfilePage />
        </div>
        <div className="App-pricing" id="pricing">
          <Pricing />
        </div>
        <div className="App-gallery" id="gallery">
          <Gallery />
        </div>
        <div className="App-testimonials" id="testimonials">
          <Testimonials />
        </div>

        <div className="App-Contact" id="contact">
          <ContactForm />
        </div> */}

      {/* <HomePageComponents/> */}

      <Switch>
        <Route exact path="/" render={() => <HomePageComponents />} />
        <Route
          exact
          path="/gallery"
          render={() => (
            <React.Fragment>
              <Mobile>
                <NavigationIndividual />
              </Mobile>{" "}
              <Gallery />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <React.Fragment>
              <Mobile>
                <NavigationIndividual />
              </Mobile>
              <ProfilePage />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/pricing"
          render={() => (
            <React.Fragment>
              <Mobile>
                <NavigationIndividual />
              </Mobile>{" "}
              <Pricing />{" "}
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/testimonials"
          render={() => (
            <React.Fragment>
              <Mobile>
                <NavigationIndividual />
              </Mobile>
              <Testimonials />{" "}
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/contact"
          render={() => (
            <React.Fragment>
              <Mobile>
                <NavigationIndividual />
              </Mobile>
              <ContactForm/>{" "}
            </React.Fragment>
          )}
        />
        {/* <Route exact path="/" render={() => <LandingPage />} /> */}
        {/* <Route exact path="/gallery" />
          <Route exact path="/landing" />
          <Route exact path="/pricing" />
          <Route exact path="/testimonials" />
          <Route exact path="/profile" />
          <Route exact path="/contact" />
          <Route exact path="/review" /> */}
        {/* <Route exact path="/review" render={() => <TestimonialForm />} /> */}
      </Switch>
    </div>
  );
}
