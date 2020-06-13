import React, {Component} from 'react';
import './Gallery.css';
import {Images} from '../data/Images';
import PhotoCard from './PhotoCard'
import CardColumns from 'react-bootstrap/CardColumns'
import Grid from "@material-ui/core/Grid";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {headers} from '../data/headers';
import PageHeader from './PageHeader';

class Gallery extends Component{
    static defaultProps={
        Images,
        headers
    }

    render(){
        return (
          <div className="Gallery">
            <PageHeader header={this.props.headers.Gallery} />

            <CardColumns  className="">
              {this.props.Images.map((m) => (
                <PhotoCard image={m} />
              ))}
            </CardColumns>

            {/* <Container fluid>
                    <CardColumns className='card-columns'>
                        <Row>
                            {this.props.Images.map(m=>(
                                <Col xs={4} md={3}>
                                    <PhotoCard image={m}/>
                                </Col>
                            ))}
                        </Row>
                    </CardColumns>
                </Container> */}
          </div>
        );
    } 
}

export default Gallery;