import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";

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

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

function TopHeaderDesktop(props){
  return (
    <Jumbotron fluid>
      <Container>
        <h1>{props.header}</h1>
        <p>
          Have a good look at what I can do for you. Teeth, Eyebrow, anything you
          need
        </p>
      </Container>
    </Jumbotron>
  );
}

function TopHeaderMobile(props){
  return (
    <Jumbotron fluid>
      <Container>
        <h1>{props.header}</h1>
        {/* <p>
          Have a good look at what I can do for you. Teeth, Eyebrow, anything you
          need
        </p> */}
      </Container>
    </Jumbotron>
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