import React, {Component} from 'react';
import './Testimonials.css';
import {testimonials} from '../data/testimonials'
// import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Picture from '../images/1.jpeg'
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import { headers } from "../data/headers";
import PageHeader from "./PageHeader";

class Testimonials extends Component{
    static defaultProps={
        testimonials, 
        headers
    }

    render(){
        return (
          <div className="Testimonials">
            <PageHeader header={this.props.headers.Testimonials}/>
            {this.props.testimonials.map((m) => (
              <Card
                style={{ backgroundColor: "" }}
                className="Card"
                elevation={5}
                style={{ maxWidth: "90%" }}
              >
                <CardActionArea style={{ display: "" }}>
                  <CardMedia style={{ textAlign: "center" }}>
                    <CardContent
                      style={{
                        backgroundImage: "url(" + Picture + ")",
                        height: "30vh",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {m}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <p>{m}</p> */}
              </Card>
            ))}
            <Fab
              variant="extended"
              color="primary"
              aria-label="add"
              style={{ position: "fixed", bottom: "5px", right: "5px" }}
            >
              {/* <AddIcon /> */}
              {/* Add Review */}
              <Link to="/review" style={{color: 'white'}}>Add Review</Link>
            </Fab>
          </div>
        );
    }
}

export default Testimonials; 