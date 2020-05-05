import React from "react";
import "./TestimonialForm.css";
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
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "70%",
      margin: "3vh",
    },
  }, 
}));

export default function TestimonialForm() {
  const classes = useStyles();

  return (
    <div className="TestimonialForm">
      <Container fluid>
        <Paper elevation={5}>
          <form className={classes.root}>
            <TextField id="standard-basic" label="Name" />
            <TextField
              multiline
              rows={5}
              id="outlined-basic"
              label="Testimonial"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
            </Button>
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
    </div>
  );
}
