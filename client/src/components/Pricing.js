import React, {createRef} from "react";
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
import {headers} from '../data/headers';
import PageHeader from './PageHeader';
import DesktopPricing from '../components/desktop/DesktopPricing'
import { useMediaQuery } from "react-responsive";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { CardHeader } from "@material-ui/core";
import NavigationIndividual from './NavigationIndividual'

const useStyles = makeStyles({
  root: {
    maxWidth: '400px',
    margin: "100px 10px 5px 10px",
  },
});

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

function Sonnet(){
  return(
    <div>
      dale ferrier
    </div>
  )
}

function Price(){
  const classes = useStyles()
  return (
    <Container fluid>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className='justify-content-between'>
        <Tab eventKey="home" title="Family">
          <Card>
            <CardHeader title="dale" />
            <CardContent>
              <Typography>
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one of
                the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections 1.10.32 and 1.10.33 of "d
              </Typography>
            </CardContent>
          </Card>
        </Tab>
        <Tab eventKey="profile" title="Couple">
          <Card>
            <CardHeader title="dale" />
            <CardContent>
              <Typography>
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one of
                the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections 1.10.32 and 1.10.33 of "d
              </Typography>
            </CardContent>
          </Card>
        </Tab>
        <Tab eventKey="contact" title="Individual">
          <Card>
            <CardHeader title="dale" />
            <CardContent>
              <Typography>
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one of
                the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections 1.10.32 and 1.10.33 of "d
              </Typography>
            </CardContent>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
}


export default function Pricing(){
  return(
    <div>
      <Mobile>
        {/* <NavigationIndividual/> */}
        <PageHeader header={headers.Pricing}/>
        <Price/>
      </Mobile>
      <DesktopPricing/>
    </div>
  )
}


// const props = headers

// const scrollDiv = createRef()

// export default function Pricing() {
  
//   const classes = useStyles();

  // const data = {pricing}

  // return (

    // <div className='Pricing'>
          {/* <DesktopPricing/> */}
          {/* <PageHeader header={props.Pricing}/>
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
          ))} */}
    {/* </div> */}
  {/* ); */}
{/* } */}
