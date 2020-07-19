import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import './PageHeader.css'
import PhotographerSVG from "../images/photographer.svg";
import CameraSVG from "../images/camera.svg";
import {Mobile} from '../functions/helperFunctions'
import {Desktop} from '../functions/helperFunctions'

const useStyles = makeStyles({
  // root: {
  //   fontSize: "40px",
  //   fontFamily: 'Amiri',
  //   borderBottom: "1px solid",
  //   borderTop: "1px solid",
  //   borderImageSource:
  //     'linear-gradient(to right, orange , rgb(243, 243, 243))',
  //   borderImageSlice: 1,
  //   textAlign: 'center',
  //   marginTop: '30px',
  //   marginBottom: '20px',
  // },
});

// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 });
//   return isDesktop ? children : null;
// };

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 991 });
//   return isMobile ? children : null;
// };

// function PhotographerIcon() {
//   return (
//     <img
//       style={{ height: "5vw", margin: 0, padding: '0px 20px' }}
//       src={PhotographerSVG}
//     />
//   );
// }

function TopHeaderDesktop(props){
  return (
    <div className='TopHeaderDesktop'>
      {/* <Jumbotron fluid> */}
        <Container fluid className='TopHeaderDesktop-container'>
          {/* <PhotographerIcon/> */}
          <h1>{props.header}</h1>
          {/* <p>
            Have a good look at what I can do for you. Teeth, Eyebrow, anything you
            need
          </p> */}
        </Container>
      {/* </Jumbotron> */}
    </div>
  );
}

function TopHeaderMobile(props){
  return (
    // <Jumbotron fluid>
    <Container className="TopHeaderMobile">
      <h2 style={{ textAlign: 'center', textDecoration: "underline", margin: '25px 0px 25px 0px', padding: '10px 0px 10px 0px' }}>{props.header}</h2>
      {/* <p>
          Have a good look at what I can do for you. Teeth, Eyebrow, anything you
          need
        </p> */}
    </Container>
    // </Jumbotron>
  );
}

export default function PageHeader(props){
    const classes = useStyles()

    return(
      <div>
        <Desktop>
          <TopHeaderDesktop header={props.header}/>
        </Desktop>
        <Mobile>
          <TopHeaderMobile header={props.header}/>
        </Mobile>
      </div>
    )
    // return(
    //     <Desktop>
    //       <div className={''}>
    //           {props.header}
    //       </div>
    //     </Desktop>
    // )
}