import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";

export default function CookieAlert() {

  const [timesOpen, setTimesOpen] = useState(0);

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTimesOpen(1)
    setOpen(false);
  };
  const handleClosePage = () => {
    window.open("about:blank", "_self");
    window.close();
  };

  return (
    <div className="CookieAlert">
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={timesOpen > 0 ? false : open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cookies"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We use cookies to ensure that we give you the best experience on our
            website. If you continue to use this site we will assume that you
            are happy with it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          style={{fontSize: '0.7em'}}
            className="CookieAlert-button"
            onClick={handleClosePage}
            color="primary"
          >
            Leave Page
          </Button>
          <Button style={{fontWeight: 800}}onClick={handleClose} color="primary">
            OK, Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
