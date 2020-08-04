import React, { useState, useEffect } from "react";
import "./ContactForm.css";
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
import { HashLink as Link } from "react-router-hash-link";
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
import ContactFormMobile from "./ContactFormMobile";

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

function ContactFormDesktop() {
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
    <div className="ContactForm">
      <PageHeader header={props.ContactForm} />
      <div className="ContactForm-grid">
        <div className="ContactForm-details">
          <div style={{ textAlign: "center" }}>
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              <li style={{ margin: 40 }}>
                <CallIcon style={{ margin: 10, fontSize: "2em" }} />
                +447900690989
              </li>
              <li style={{ margin: 10 }}>
                <EmailIcon style={{ margin: 10, fontSize: "2em" }} />
                lahiru@treasureboxphotography.co.uk
              </li>
            </ul>
          </div>
          <div className="ContactForm-icons" style={{}}>
            <div>
              <a
                style={{ color: "black" }}
                href="https://www.facebook.com/treasurebox.photo"
              >
                <FacebookIcon />
              </a>
            </div>
            <div>
              <a
                style={{ color: "black" }}
                href="https://www.instagram.com/treasurebox.photo/"
              >
                <InstagramIcon />
              </a>
            </div>
            {/* <div>
              <LinkedInIcon />
            </div>
            <div>
              <TwitterIcon />
            </div> */}
          </div>
          <div className="ContactForm-privacy">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div className="ContactForm-form">
          <Container>
            <Paper elevation={2} style={{ textAlign: "center" }}>
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
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [location, setLocation] = useState(document.location.pathname);

  useEffect(() => {
    setLocation(document.location.pathname);
    console.log(location);
  });
  return (
    <div>
      <Desktop>
        <ContactFormDesktop />
      </Desktop>
      <Mobile>
        <ContactFormMobile />
      </Mobile>
    </div>
  );
}
