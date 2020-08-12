import React from 'react'
import { useMediaQuery } from "react-responsive";
import DesktopNavigation from './desktop/DesktopNavigation'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LogoSVG from "../images/logo.svg";
import Menu from '../components/Menu'
import { Link } from "react-router-dom";
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import { Desktop } from "../functions/helperFunctions";
import { Mobile } from "../functions/helperFunctions";
import MenuDrawer from './MenuDrawer'

const useStyles = makeStyles({
  AppBar:{
    height: '13vw',
    backgroundColor: 'white',
  },
  toolbar:{
    justifyContent: 'space-between',
    margin: 'auto 0 auto 0',
  }, 
  title:{
    fontSize: '4.5vw',
    fontFamily: 'LahiruFont',
    color: 'rgb(89, 89, 89)'
    // margin: '10px',
    // border: '2px solid red'
  }
})

// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 });
//   return isDesktop ? children : null;
// };

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 991 });
//   return isMobile ? children : null;
// };

function Logo() {
  return (
    <img
      style={{ height: "9vw", margin: 0, padding: "0px 20px 0px 0px" }}
      src={LogoSVG}
    />
  );
}



function NavigationMobile(){
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, 
  });
  const classes = useStyles()
  return (
    <div>
      <Slide appear={true} direction="down" in={trigger}>
        <AppBar className={classes.AppBar}>
          <Toolbar className={classes.toolbar}>
            <Link
              smooth={true}
              to="/"
              // to="/landing/#landing"
              // id="Nav-logo"
              // className="hidden"
            >
              <Logo />
            </Link>
            {/* <Logo /> */}
            <Typography className={classes.title}>
              Treasurebox Photography
            </Typography>
            {/* <MenuDrawer /> */}
            <Menu />
          </Toolbar>
        </AppBar>
      </Slide>
    </div>
  );
}



export default function Navigation(){
  return(
    <div>
      <Mobile>
        <NavigationMobile/>
      </Mobile>
      <Desktop>
        <DesktopNavigation/>
      </Desktop>
    </div>
  )
}




// import React, {
//   Component,
//   useState,
//   createRef,
//   useRef,
//   useEffect,
// } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Menu from "./Menu";
// import "./Navigation.css";
// import LogoSVG from "../images/logo.svg";
// import { HashLink as Link } from "react-router-hash-link";
// import DesktopNavigation from "../components/desktop/DesktopNavigation";
// import { useMediaQuery } from "react-responsive";

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1, 
//     backgroundColor: "white",
//     boxShadow: "none",
//   },
//   tab: {
//     "&:focus": {
//       outline: "none",
//     },
//   },
//   toolbar: {
//     justifyContent: "space-between",
//     backgroundColor: "white",
//   },
// });

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 991 });
//   return isMobile ? children : null;
// };

// function Logo() {
//   return (
//     <img style={{ height: "30px", margin: 0, padding: 0 }} src={LogoSVG} />
//   );
// }

// function Navigate(props) {
//   const navRef = useRef();
//   const [position, setPosition] = useState(navRef.offsetTop);

//   const scrollListener = () => {
//     if (navRef.current.offsetTop != 0) {
//       setPosition(navRef.current.offsetTop);
//     }

//     console.log(navRef.current.getBoundingClientRect());
//     console.log(`document.body.scrollTop ${document.body.scrollTop}`);
//     console.log(
//       `id=navi offsetTop ${document.getElementById("navi").offsetTop}`
//     );
//     const isTop = document.body.scrollTop >= position;
//     // const isTop = window.scrollY >= position
//     const nav = navRef.current;
//     console.log(`scrolltop is ${nav.scrollTop}`);
//     if (isTop) {
//       nav.classList.add("fixed");
//       document.getElementById("Nav-logo").classList.remove("hidden");
//       document.getElementById("nav-menu").classList.remove("hidden");
//       document.getElementById("Nav-logo").classList.add("visible");
//       document.getElementById("nav-menu").classList.add("visible");
//     } else {
//       nav.classList.remove("fixed");
//       document.getElementById("Nav-logo").classList.add("hidden-fadeOut");
//       document.getElementById("nav-menu").classList.add("hidden-fadeOut");
//       document.getElementById("Nav-logo").classList.remove("visible");
//       document.getElementById("nav-menu").classList.remove("visible");
//     }
//   };

//   useEffect(() => {
//     document.body.addEventListener("scroll", scrollListener);
//     // window.addEventListener('scroll', scrollListener)
//     return () => {
//       document.body.removeEventListener("scroll", scrollListener);
//       // window.removeEventListener('scroll', scrollListener)
//     };
//   });

//   const classes = useStyles();
//   return (
//     <div>
//       <div className="Navigation" ref={navRef} id="navi">
//         {/* <AppBar position ={"sticky"}> */}
//         <Toolbar className={classes.toolbar}>
//           <Link
//             smooth={true}
//             to="/landing/#landing"
//             id="Nav-logo"
//             className="hidden"
//           >
//             <Logo />
//           </Link>

//           <Typography>
//             <h5 className="Nav-heading">TreasureBox Photography</h5>
//           </Typography>
//           <div className="menu hidden" id="nav-menu">
//             <Menu />
//           </div>
//         </Toolbar>
//         {/* </AppBar> */}
//       </div>
//     </div>
//   );
// }

// export default function Navigation(){
//   return(
//     <div>
//       <Mobile>
//         <Navigate/>
//       </Mobile>
//       <DesktopNavigation/>
//     </div>
//   )
// }