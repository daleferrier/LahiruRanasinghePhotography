// import React, {Component} from 'react';
// import './Navigation.css'
// import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
// import { Route, Switch, Link, NavLink } from "react-router-dom";
// import Gallery from './Gallery';
// import LandingPage from './LandingPage';
// import Pricing from './Pricing';
// import Testimonials from './Testimonials';
// import ProfilePage from './ProfilePage'; 
// import Logo from '../images/logo.svg'

// class Navigation extends Component{
//   render(){
//     return (
//       <div className="Navigation.css">
//         <Switch>
//           <Route exact path="/" render={() => <LandingPage />} />
//           <Route exact path="/gallery" render={() => <Gallery />} />
//           <Route exact path="/pricing" render={() => <Pricing />} />
//           <Route exact path="/testimonials" render={() => <Testimonials />} />
//           <Route exact path="/profile" render={() => <ProfilePage />} />
//         </Switch>
//         <Navbar expand="lg" fixed='top' className='Navigation-navbar' variant='dark' bg='primary'>
//           <Navbar.Brand>
//             <Link to='/'>
//               <img src={Logo} style={{width: '50px', height: 'auto'}}/>
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <NavLink exact activeClassName="active-link" to="/gallery">
//                 Photo Gallery
//               </NavLink>
//               <NavLink exact activeClassName="active-link" to="/pricing">
//                 Pricing
//               </NavLink>
//               <NavLink exact activeClassName="active-link" to="/testimonials">
//                 Testimonials
//               </NavLink>
//               <NavLink exact activeClassName="active-link" to="/profile" class>
//                 About Me
//               </NavLink>
//               {/* <Nav.Link href="#home">Home</Nav.Link> */}
//               {/* <Nav.Link href="#link">Link</Nav.Link> */}
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default Navigation;













import React, {Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LeftDrawer from "./LeftDrawer";
import Logo from '../images/logo.svg'
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import Gallery from './Gallery';
import LandingPage from './LandingPage';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import ProfilePage from './ProfilePage';
import Menu from './Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontWeight: 'bold',
    // font-size: calc([minimum size] + ([maximum size] - [minimum size]) 
    // * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
    fontSize: 'calc(15px + (26 - 15) * ((100vw - 300px) / (1600 - 300)))',
    lineHeight: 'calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))',
  },
  bar:{
    backgroundColor: 'orange',
  },
  logo:{
    // width: '8vw',
    width: 'calc(40px + (150 - 40) * ((100vw - 300px) / (1600 - 300)))',
    // lineHeight: 'calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))',
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="" elevation={2}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
            {/* <LeftDr awer classname={classes.drawer} /> */}
            <Link to="/">
              <img className={classes.logo} src={Logo} />
            </Link>
            {/* <img className={classes.logo} src={Logo} /> */}
          </IconButton>
          <Typography className={classes.title}>
            TreasureBox Photography
          </Typography>
          {/* <NavLink exact activeClassName="active-link" to="/gallery">
            Photo Gallery
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/pricing">
            Pricing
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/testimonials">
            Testimonials
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/profile">
            About Me
          </NavLink> */}
          <Menu />
          {/* <Button color="black">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
