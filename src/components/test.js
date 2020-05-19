import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Navigation from './Navigation'

function HideOnScroll(props) {
  const { children} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({threshold: 300});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function HideAppBar(props) {
  return (
    <div>
      {/* <React.Fragment> */}
        <HideOnScroll>
          <Navigation/>
          {/* <AppBar>
            <Toolbar>  
            </Toolbar>
          </AppBar> */}
        </HideOnScroll>
        <Toolbar />
      {/* </React.Fragment> */}
    </div>
  );
}
