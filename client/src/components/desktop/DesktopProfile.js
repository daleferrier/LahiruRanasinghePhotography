import React from "react";
import { useMediaQuery } from "react-responsive";
// import ProfilePic from "../../images/lahiru2.jpeg";
import ProfilePic from "../../images/gallery/D2.jpg";
import ProfilePicTwo from "../../images/gallery/F1.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./DesktopProfile.css";
import Paper from "@material-ui/core/Paper";
import { headers } from "../../data/headers";
import PageHeader from "../PageHeader";
import { Desktop } from "../../functions/helperFunctions";

// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 });
//   return isDesktop ? children : null;
// };

function ProfileTwoPics(){
  return (
    <div className="ProfileTwoPics">
      <div className="ProfileTwoPics-Image">
        <img className="one" src={ProfilePicTwo} />
        <img className="two" src={ProfilePic} />
      </div>
      <div className="ProfileTwoPics-Text">
        <div style={{ fontFamily: "", fontSize: "1.1em", fontWeight: 400 }}>
          <p>
            <span
              style={{
                fontSize: "3em",
                lineHeight: "0.1em",
                margin: -2,
                fontFamily: "LahiruFont",
                fontWeight: 400,
                color: "black",
              }}
            >
              H
            </span>
            i, I’m Lahiru Ranasinghe (I'm the bearded one at the back of the
            photo). Thank you for visiting Treasurebox Photography!
          </p>
          <p>
            As cheesy as this is, to me, my camera is my treasure box. I use it
            to capture and store the things that are most precious...memories.
            I would love to meet you and your loved ones and create treasures
            for you too!
          </p>
          <p>
            I have a very relaxed and informal style. My shoots are done in your
            homes, gardens or in outdoor spaces like parks or woods and I do my
            best to make it an enjoyable experience for the whole family. To
            keep your kids engaged, I have dinosaur knowledge equivalent to a
            four year old and am an expert at animal sounds!
          </p>
          <p>
            I am based in Ruislip, West London and happily travel to Harrow,
            Hillingdon, Buckinghamshire, Hertfordshire and West London. If you
            would like me to create some beautiful images for you and your loved
            ones, please do get in in touch.
          </p>
          <p>I hope you'll invite me to photograph you and your family soon!</p>
        </div>
      </div>
    </div>
  );
}

function ProfileGrid(){
  return (
    <div className="ProfileGrid">
      <div className="ProfileGrid-image">
        <img src={ProfilePicTwo} />
      </div>
      <div className="ProfileGrid-text">
        <div style={{ fontFamily: "", fontSize: "1.1em", fontWeight: 400 }}>
          <p>
            <span
              style={{
                fontSize: "3em",
                lineHeight: "0.1em",
                margin: -2,
                fontFamily: "LahiruFont",
                fontWeight: 400,
                color: "black",
              }}
            >
              H
            </span>
            i, I’m Lahiru Ranasinghe (I'm the bearded one at the back of the
            photo). Thank you for visiting Treasurebox Photography!
          </p>
          <p>
            As cheesy as this is, to me, my camera is my treasure box. I use it
            to capture and store the things that are most precious...memories. I
            would love to meet you and your loved ones and create treasures for
            you too!
          </p>
          <p>
            I have a very relaxed and informal style. My shoots are done in your
            homes, gardens or in outdoor spaces like parks or woods and I do my
            best to make it an enjoyable experience for the whole family. To
            keep your kids engaged, I have dinosaur knowledge equivalent to a
            four year old and am an expert at animal sounds!
          </p>
          <p>
            I am based in Ruislip, West London and happily travel to Harrow,
            Hillingdon, Buckinghamshire, Hertfordshire and West London. If you
            would like me to create some beautiful images for you and your loved
            ones, please do get in in touch.
          </p>
          <p>I hope you'll invite me to photograph you and your family soon!</p>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div>
      {/* <PageHeader header={headers.ProfilePage} /> */}
      <Container fluid className="DesktopProfile-container">
        <Row className="DesktopProfile-row align-items-center">
          <Col className="text-center h-100">
            <img className="DesktopProfile-image mh-100" src={ProfilePic} />
          </Col>
          <Col>
            <Row className="">{/* <div>A little about me</div> */}</Row>
            <Row>
              <p
                style={{ fontFamily: "", fontSize: "1.1em", fontWeight: 400 }}
                className="mh-100"
              >
                <span
                  style={{
                    fontSize: "3em",
                    lineHeight: "0.1em",
                    margin: -2,
                    fontFamily: "LahiruFont",
                    fontWeight: '400',
                    color: "black",
                  }}
                >
                  H
                </span>
                i, I’m Lahiru Ranasinghe (I'm the bearded one at the back of
                the photo). Thank you for visiting Treasurebox Photography! As
                cheesy as this is, to me, my camera is my treasure box. I use it
                to capture and store the things that are most precious…memories.
                I would love to meet you and your loved ones and create
                treasures for you too! I have a very relaxed and informal style.
                My shoots are done in your homes, gardens or in outdoor spaces
                like parks or woods and I do my best to make it an enjoyable
                experience for the whole family. Think of it as a chilled out
                morning or afternoon with a friend…a friend who you've just met,
                and who may ask you to stare into the distance and look pensive
                while he clicks away! To entertain the kids, I have dinosaur
                knowledge equivalent to a four year old and I am an expert at
                animal sounds! I am based in Ruislip, West London and happily
                travel to Harrow, Hillingdon, Buckinghamshire, Hertfordshire and
                West London. If you would like me to create some beautiful
                images for you and your loved ones, please do get in in touch. I
                hope you’ll invite me to photograph you and your family soon!
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
      {/* <PageHeader header={headers.ProfilePage} /> */}
      {(props.desktopLocation == "home" ? <ProfileGrid /> : <ProfileTwoPics />)}
      {/* <Profile /> */}
      {/* <ProfileTwoPics /> */}
    </Desktop>
  );
}
