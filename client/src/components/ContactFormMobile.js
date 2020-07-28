import React, { useEffect, useState } from "react";
import "./ContactFormMobile.css";

import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { headers } from "../data/headers";
import PageHeader from "./PageHeader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import { HashLink as Link } from "react-router-hash-link";
import Fab from "@material-ui/core/Fab";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import { SnackbarContent } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Desktop } from "../functions/helperFunctions";
import { Mobile } from "../functions/helperFunctions";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import CloseIcon from "@material-ui/icons/Close";
import {Link} from "react-router-dom";
// import { Route, Switch, Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "70%",
      margin: "3vh",
    },
  },
  snackBar: {},
}));

const props = headers;

function ContactUserForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    groupSize: "",
    enquiry: "",
  });

  const [status, setStatus] = useState(null);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("/contact", {
        details: state,
      })
      .then(function (response) {
        if (response.data.message == "success") {
          setStatus("SENT");
          handleClick();
          setState({
            name: "",
            email: "",
            groupSize: "",
            enquiry: "",
          });
        } else if (response.data.message == "fail") {
          setStatus("FAILED");
          handleClick();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const classes = useStyles();

  return (
    <div className="ContactFormMobile-Form">
      {/* <PageHeader header={props.ContactForm} /> */}
      <Container>
        <Paper elevation={3} style={{ textAlign: "center" }}>
          <Button
            className="ContactFormMobile-close"
            style={{ position: "absolute", right: "10px", outline: "none" }}
          >
            <CloseIcon />
          </Button>
          <form className={classes.root}>
            <TextField
              id="name"
              label="Name"
              value={state.name}
              onChange={handleChange}
              name="name"
            />
            <TextField
              id="email"
              label="Your Email"
              value={state.email}
              name="email"
              onChange={handleChange}
            />
            <TextField
              multiline
              rows={10}
              id="outlined-basic"
              label="Enquiry"
              variant="outlined"
              name="enquiry"
              value={state.enquiry}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<SendIcon />}
              elevation={3}
              onClick={handleSubmit}
            >
              Send Message
            </Button>
            <Snackbar
              className={classes.snackBar}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <SnackbarContent
                style={{
                  backgroundColor: `${status == "SENT" ? "green" : "red"}`,
                }}
                message={status}
              />
            </Snackbar>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="ContactFormMobile-Details">
      {/* <PageHeader header={props.ContactForm} /> */}
      <Paper
        elevation={3}
        style={{ height: "auto", width: "95vw", margin: "auto" }}
      >
        <div style={{ textAlign: "center" }}>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            <li style={{ margin: 40 }}>
              <CallIcon style={{ margin: 10, fontSize: "2em" }} />
              <a href="tel:+447900690989">+447900690989</a>
              {/* +447900690989 */}
            </li>
            <li style={{ margin: '40px 10px' }}>
              <EmailIcon style={{ margin: 10, fontSize: "2em" }} />
              <a href="mailto:treasurebox.photo.uk@gmail.com?subject=Photoshoot Enquiry&body=Hi%20Lahiru%20">
                lahiru@treasureboxphotography.co.uk
              </a>
            </li>
            <li>
              <Button
                style={{
                  height: 30,
                  marginBottom: 40,
                  padding: "auto",
                  textTransform: "capitalize",
                  outline: "none",
                }}
                className="ContactFormMobile-button"
                startIcon={
                  <SendIcon
                    style={{ margin: "0px 0px 0px 5px", fontSize: "2em" }}
                  />
                }
              >
                Message Me
              </Button>
            </li>
          </ul>
        </div>
        <div className="ContactFormMobile-icons" style={{}}>
          <div style={{ margin: 5 }}>
            <FacebookIcon />
          </div>
          <div style={{ margin: 5 }}>
            <InstagramIcon />
          </div>
          {/* <div>
            <LinkedInIcon />
          </div>
          <div>
            <TwitterIcon />
          </div> */}
        </div>
        <div className='ContactFormMobile-privacy'>
          <Link to='/privacy'>
            Privacy Policy
          </Link>
        </div>
      </Paper>
    </div>
  );
}

export default function ContactFormMobile() {
  useEffect(() => {
    var card = document.querySelector(".ContactFormMobile-card");
    document
      .querySelector(".ContactFormMobile-button")
      .addEventListener("click", function () {
        card.classList.toggle("is-flipped");
      });
    document
      .querySelector(".ContactFormMobile-close")
      .addEventListener("click", function () {
        card.classList.toggle("is-flipped");
      });
  }, []);
  return (
    <div className="ContactFormMobile">
      <PageHeader header={props.ContactForm} />
      <div className="ContactFormMobile-scene">
        <div className="ContactFormMobile-card">
          <div className="ContactFormMobile-cardFace card-face-front">
            <ContactDetails />
          </div>
          <div className="ContactFormMobile-cardFace card-face-back">
            <ContactUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}
