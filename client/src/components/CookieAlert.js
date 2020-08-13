
import React, {useState} from 'react';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, Button } from '@material-ui/core';



const useStyles = makeStyles({
  appBar:{
    top: 'auto',
    bottom: 0,
    background: 'rgb(89,89,89)',
    height: 'auto',
    justifyContent: 'center',
    flexGrow: 1
  },
  typography:{
    fontSize: '15px',
    flexGrow: 1
  },
  button: {
    margin: 0,
    padding: 0,
    color: 'white',
  }
})



export default function CookieAlert(){

const [visibility, setVisibility] = useState("visible");

const handleClick = () => {
  setVisibility("hidden");
};

  const classes = useStyles()
  return (
    <div>
      <AppBar className={classes.appBar} style={{visibility: visibility}}>
        <Toolbar>
          <Typography className={classes.typography}>
            We use cookies to ensure that we give you the best experience on our
            website. If you continue to use this site we will assume that you
            are happy with it.
          </Typography>
          <Button onClick={handleClick} className={classes.button}>
              OK
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


// import React from "react";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import { useState } from "react";

// export default function CookieAlert() {

//   const [timesOpen, setTimesOpen] = useState(0);

//   const [open, setOpen] = React.useState(true);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setTimesOpen(1)
//     setOpen(false);
//   };
//   const handleClosePage = () => {
//     window.open("about:blank", "_self");
//     window.close();
//   };

//   return (
//     <div className="CookieAlert">
//       <Dialog
//         open={timesOpen > 0 ? false : open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Cookies"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             We use cookies to ensure that we give you the best experience on our
//             website. If you continue to use this site we will assume that you
//             are happy with it.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button style={{fontWeight: 800}}onClick={handleClose} color="primary">
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
