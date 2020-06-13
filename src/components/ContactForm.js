import React from 'react';
import './ContactForm.css'
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Container from '@material-ui/core/Container'
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper'
import {headers} from '../data/headers'
import PageHeader from './PageHeader'
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { HashLink as Link } from "react-router-hash-link";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "70%",
      margin: '3vh'
    },
  },
}));

const props = headers

export default function ContactForm() {

        const classes = useStyles();

        return (
          <div className="ContactForm">
            <PageHeader header={props.ContactForm} />
            <Container fluid>
              <Paper elevation={5}>
                <form className={classes.root}>
                  <TextField id="standard-basic" label="Name" />
                  <TextField id="standard-basic" label="Email" />
                  <TextField id="standard-basic" label="Group Size" />
                  <TextField
                    multiline
                    rows={5}
                    id="outlined-basic"
                    label="Enquiry"
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<SendIcon />}
                    elevation={3}
                  >
                    Send
                  </Button>
                </form>
              </Paper>
            </Container>
            <Fab
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
              {/* <AddIcon /> */}
              {/* Add Review */}
              <Link
                smooth={false}
                to="/contact/#contact"
                style={{ color: "white" }}
              >
                Get in touch
                {/* <MailOutlineIcon /> */}
              </Link>
            </Fab>
          </div>
        );
    }
