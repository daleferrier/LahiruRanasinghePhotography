import React from "react";
import { useMediaQuery } from "react-responsive";
import ProfilePic from "../../images/lahiru2.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./DesktopProfile.css";
import Paper from "@material-ui/core/Paper";
import { headers } from "../../data/headers";
import PageHeader from "../PageHeader";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};


function Profile() {
  return (
    <div>
      <PageHeader header={headers.ProfilePage}/>
      <Container fluid className="DesktopProfile-container">
        <Row className="DesktopProfile-row align-items-center">
          <Col className="text-center h-100">
            <img className="DesktopProfile-image mh-100" src={ProfilePic} />
          </Col>
          <Col>
            <Row className=''>
              <div>A little about me</div>
            </Row>
            <Row>
              <p className="mh-100">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one of
                the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                BC. This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default function DesktopProfile(props) {
  return (
    <Desktop>
      <Profile />
    </Desktop>
  );
}
