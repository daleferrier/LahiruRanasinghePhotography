import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { Link, NavLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LogoSVG from "../../images/logo.svg";
import Spacer from "./Spacer";
import { Mobile } from "../../functions/helperFunctions";
import { Desktop } from "../../functions/helperFunctions";
import "./DesktopNavigation.css";

const useStyles = makeStyles({
  appbar: {
    padding: "20px 0px 0px 0px",
    backgroundColor: "white",
    boxShadow: "none",
  },
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    boxShadow: "none",
  },
  tab: {
    "&:focus": {
      outline: "none",
    },
  },
  toolbar: {
    justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: "30px",
  },
  heading: {
    fontSize: "5vw",
    fontFamily: "LahiruFont",
    margin: 0,
    padding: 0,
  },
});

function Logo() {
  return (
    <img
      style={{ height: "6vw", margin: 0, padding: "0px 20px 0px 0px" }}
      src={LogoSVG}
    />
  );
}



function DesktopNav() {
  const classes = useStyles()
  return (
    <div className="DesktopNav">
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

        <Typography>
          {/* <h5 className='DesktopNavigation-heading'>TreasureBox Photography</h5> */}
          <h5 className={classes.heading}>TreasureBox Photography</h5>
        </Typography>
      </Toolbar>
      <div className="DesktopNav-nav">
            <li>
              <NavLink
                exact
                className="DesktopNav-link"
                activeClassName="DesktopNav-active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="DesktopNav-link"
                activeClassName="DesktopNav-active"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="DesktopNav-link"
                activeClassName="DesktopNav-active"
                to="/profile"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="DesktopNav-link"
                activeClassName="DesktopNav-active"
                to="/pricing"
              >
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="DesktopNav-link"
                activeClassName="DesktopNav-active"
                to="/testimonials"
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="DesktopNav-link"
                activeClassName="DesktopNav-active"
                to="/contact"
              >
                Get In Touch
              </NavLink>
            </li>
      </div>
    </div>
  );
}

function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Paper className={classes.root}>
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

            <Typography>
              {/* <h5 className='DesktopNavigation-heading'>TreasureBox Photography</h5> */}
              <h5 className={classes.heading}>TreasureBox Photography</h5>
            </Typography>
          </Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab
              className={classes.tab}
              label="Home"
              component={Link}
              smooth={false}
              to="/"
            />
            <Tab
              className={classes.tab}
              label="Gallery"
              component={Link}
              smooth={false}
              to="/gallery"
              // to="/gallery/#gallery"
            />
            <Tab
              className={classes.tab}
              label="About Me"
              component={Link}
              smooth={false}
              to="/profile"
              // to="/profile/#profile"
            />
            <Tab
              className={classes.tab}
              label="Packages"
              component={Link}
              smooth={false}
              to="/pricing"
              // to="/pricing/#pricing"
            />
            <Tab
              className={classes.tab}
              label="Testimonials"
              component={Link}
              smooth={false}
              to="/testimonials"
              // to="/testimonials/#testimonials"
            />
            <Tab
              className={classes.tab}
              label="Get in touch"
              component={Link}
              smooth={false}
              to="/contact"
              // to="/contact/#contact"
            />
          </Tabs>
        </Paper>
      </AppBar>
    </div>
  );
}

export default function DesktopNavigation() {
  return (
    // <Desktop>
    <div>
      {/* <Spacer/> */}
      {/* <CenteredTabs/> */}
      <div className='DesktopNav-fixed'>
        <DesktopNav/>
      </div>
      <div className='DesktopNav-sticky'>
        <DesktopNav />
      </div>
    </div>
    // </Desktop>
  );
}
