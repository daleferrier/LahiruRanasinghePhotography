import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Family from "../images/family.jpg";
import Portrait from "../images/portrait.jpeg";
import Couple from "../images/couple.jpg";
import pricing from "../data/pricing";
import './Pricing.css'

const useStyles = makeStyles({
  root: {
    maxWidth: '400px',
    margin: "100px 10px 5px 10px",
  },
});

export default function Pricing() {
  const classes = useStyles();

  // const data = {pricing}

  return (

    <div className='Pricing'>
          {pricing.map((m) => (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={require(`../images/${m.photo_url}`)}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {m.package}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {m.description}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h5">
                    {m.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
    </div>
  );
}
