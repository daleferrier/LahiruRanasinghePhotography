import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "white",
    fontSize: "12px",
  },
  toolbar: {
    justifyContent: "space-between",
    textAlign: "center",

  },
  navlink: {
      color: 'red'
  },
});

export default function BottomNavigation() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar} elevation={5}>
      <Toolbar className={classes.toolbar}>
        <NavLink activeClassName={classes.navlink} to="/gallery" style={{}}>
          <PhotoLibraryIcon />
          <div>Gallery</div>
        </NavLink>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <HomeIcon />
          <div>Home</div>
        </Link>
        <Link to="/contact" style={{ color: "black", textDecoration: "none" }}>
          <EmailIcon />
          <div>Contact</div>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
