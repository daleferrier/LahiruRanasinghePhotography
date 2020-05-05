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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "70%",
      margin: '3vh'
    },
  },
}));

export default function ContactForm() {

        const classes = useStyles();

        return (
          <div className="ContactForm">
            <Container fluid>
                <Paper elevation={5}>
                    <form className={classes.root}>
                      <TextField id="standard-basic" label="Name" />
                      <TextField id="standard-basic" label="Email" />
                      <TextField id="standard-basic" label="Group Size" />
                      <TextField multiline rows={5} id="outlined-basic" label="Enquiry" variant='outlined'/>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<SendIcon/>}
                        elevation={3}
                      >Send</Button>
                    </form>
                </Paper>
            </Container>
          </div>
        );
    }
