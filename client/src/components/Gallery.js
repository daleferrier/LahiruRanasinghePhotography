import React, {useEffect} from 'react';
import './Gallery.css';
import {galleryImages} from '../data/Images';
import PhotoCard from './PhotoCard'
import CardColumns from 'react-bootstrap/CardColumns'
import Grid from "@material-ui/core/Grid";
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {headers} from '../data/headers';
import PageHeader from './PageHeader';
import NavigationIndividual from './NavigationIndividual'
import { Desktop } from "../functions/helperFunctions";
import { Mobile } from "../functions/helperFunctions";
import Container from '@material-ui/core/Container'



export default function Gallery(){

  // useEffect(()=>{
  //   const style = document.getElementById('nav').getBoundingClientRect()
  //   console.log(style)
  // })

  return (
    <div className="Gallery">
      {/* <Mobile>
          <NavigationIndividual />
      </Mobile> */}
      <div id="header">
        <PageHeader header={headers.Gallery} />
      </div>

      {/* <Container> */}
        <CardColumns className="" style={{margin: 20}}>
          {galleryImages.map((m, i) => (
            <PhotoCard image={require(`../images/gallery/${m}`)} index={i} />
          ))}
        </CardColumns>
      {/* </Container> */}
      <p style={{height: 40}}></p>
    </div>
  );
}


// class Gallery extends Component{
//     static defaultProps={
//         Images,
//         headers
//     }

//     render(){
        
        
        
//         return (
//           <div className="Gallery">
//             <Mobile>
//               <div id="nav">
//                 <NavigationIndividual />
//               </div>
//             </Mobile>
//             <PageHeader header={this.props.headers.Gallery} />

//             <CardColumns className="">
//               {this.props.Images.map((m) => (
//                 <PhotoCard image={m} />
//               ))}
//             </CardColumns>

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
//             <h1>{`test value is ${test}`}</h1>
//           </div>
//         );
//     } 
// }

// export default Gallery;