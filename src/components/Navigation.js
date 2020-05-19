import React, { Component, useState, createRef, useRef, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "./Menu";
import './Navigation.css'
import LogoSVG from '../images/logo.svg';
import { HashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
});

function Logo(){
  return <img style={{height: '30px', margin: 0, padding: 0}} src={LogoSVG}/>
}

export default function Navigation(props) {


const navRef = useRef()
const[position, setPosition]=useState(navRef.offsetTop)



const scrollListener = ()=>{

  if (navRef.current.offsetTop != 0) {
    setPosition(navRef.current.offsetTop)
  }
  
  console.log(navRef.current.getBoundingClientRect());
  console.log(window.scrollY);
  const isTop = window.scrollY >= position
  const nav = navRef.current;
  if (isTop) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

useEffect(()=>{
  window.addEventListener('scroll', scrollListener)
  return ()=>{
    window.removeEventListener('scroll', scrollListener)
  }
})

  const classes = useStyles(); 
    return (
      <div className="Navigation" ref={navRef}>
        {/* <AppBar position ={"sticky"}> */}
        <Toolbar className={classes.toolbar}>
          <Link smooth={true} to="/landing/#landing">
            <Logo />
          </Link>

          <Typography>TreasureBox Photography</Typography>
          <div className="menu">
            <Menu />
          </div>
        </Toolbar>
        {/* </AppBar> */}
      </div>
    );
  }

