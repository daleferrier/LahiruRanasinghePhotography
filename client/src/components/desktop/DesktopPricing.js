import React from "react";
import { useMediaQuery } from "react-responsive";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import pricing from "../../data/pricing";
import { makeStyles } from "@material-ui/core/styles";
import { headers } from "../../data/headers";
import PageHeader from "../PageHeader";
import { Desktop } from "../../functions/helperFunctions";
import { Mobile } from "../../functions/helperFunctions";

const useStyles = makeStyles({
  card: {
    height: "auto",
    width: "auto",
  },
});

// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 });
//   return isDesktop ? children : null;
// };

function Prices() {
  const classes = useStyles();
  return (
    <div>
      {/* <Jumbotron fluid >
          <Container>
            <h1>Your Experience</h1>
            <p>
              Have a look at what I can do for you. Teeth, Eyebrow, anything you need
            </p>
          </Container>
        </Jumbotron> */}
      <PageHeader header={headers.Pricing} />
      <Container>
        <Row>
          {pricing.map((m) => (
            <Col align="center">
              <Card className={classes.card} elevation={4}>
                <CardHeader title={`${m.package}`} />
                <CardContent>
                  <Typography>
                    <ul>
                      {[...m.description].map((x) => (
                        <li style={{ textAlign: "left" }}>{x}</li>
                      ))}
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          ))}
        </Row>
        <p></p>
        <div>All prices include a £50 booking deposit.</div>
        <div>
          Additional images are available and further products can be created
          according to your requirements. Please contact me to discuss further
          if this is of interest.
        </div>
      </Container>
    </div>
  );
}

export default function () {
  return (
    <Desktop>
      <Prices />
    </Desktop>
  );
}
