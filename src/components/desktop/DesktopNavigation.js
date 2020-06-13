import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {useMediaQuery} from 'react-responsive'
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
// import {Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { HashLink as Link } from "react-router-hash-link";
import LogoSVG from '../../images/logo.svg'

const useStyles = makeStyles({
  appbar:{
    padding: '20px 0px 20px 0px',
    backgroundColor: 'white',
    boxShadow: 'none'
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
    justifyContent: 'center',
    // justifyContent: "space",
    backgroundColor: "white",
    paddingBottom: '30px'
  },
  heading:{
      fontSize: '5vw',
      fontFamily: 'LahiruFont',
      margin: 0,
      padding: 0
  }
});

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

function Logo() {
  return (
    <img style={{ height: "6vw", margin: 0, padding: '0px 20px 0px 0px' }} src={LogoSVG} />
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
              to="/landing/#landing"
              // id="Nav-logo"
              // className="hidden"
            >
              <Logo/>
            </Link>
  
            <Typography>
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
              to="/landing/#landing"
            />
            <Tab
              className={classes.tab}
              label="Gallery"
              component={Link}
              smooth={false}
              to="/gallery/#gallery"
            />
            <Tab
              className={classes.tab}
              label="About Me"
              component={Link}
              smooth={false}
              to="/profile/#profile"
            />
            <Tab
              className={classes.tab}
              label="Packages"
              component={Link}
              smooth={false}
              to="/pricing/#pricing"
            />
            <Tab
              className={classes.tab}
              label="Testimonials"
              component={Link}
              smooth={false}
              to="/testimonials/#testimonials"
            />
            <Tab
              className={classes.tab}
              label="Get in touch"
              component={Link}
              smooth={false}
              to="/contact/#contact"
            />
          </Tabs>
        </Paper>
      </AppBar>
    </div>
  );
}

export default function DesktopNavigation(){
    return(
        <Desktop>
            <CenteredTabs/>
        </Desktop>
    );
}