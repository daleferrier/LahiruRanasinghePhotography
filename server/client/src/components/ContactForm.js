import React, { useState } from "react";
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

export default function ContactForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

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
          // alert("email sent");
          setStatus('SENT')
          handleClick();
          setState({
            name: "",
            email: "",
            groupSize: "",
            enquiry: "",
          });
        } else if (response.data.message == "fail") {
          setStatus('FAILED');
          // alert("message not sent. try again");
          handleClick();
        }
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // setState({
    //   name: "",
    //   email: "",
    //   groupSize: "",
    //   enquiry: "",
    // });
    //     axios.get('/contact').then((req, res)=>{
    //       alert(req)
    //     })
  };

  const classes = useStyles();

  return (
    <div className="ContactForm">
      <PageHeader header={props.ContactForm} />
      <Container fluid>
        <Paper elevation={5}>
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
              label="Email"
              value={state.email}
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="standard-basic"
              label="Group Size"
              name="groupSize"
              value={state.groupSize}
              onChange={handleChange}
            />
            <TextField
              multiline
              rows={5}
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
              Send
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
                style={{backgroundColor: `${status=='SENT'? 'green': 'red'}`}}
                // style={{ backgroundColor: "green", textAlign: "center" }}
                message={status}
              />
            </Snackbar>
          </form>
        </Paper>
      </Container>
      {/* <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        style={{
          zIndex: 2,
          position: "fixed",
          bottom: "5px",
          right: "5px",
          fontSize: "12px",
        }}
      >
        <Link smooth={false} to="/contact/#contact" style={{ color: "white" }}>
          Get in touch
        </Link>
      </Fab> */}
    </div>
  );
}
