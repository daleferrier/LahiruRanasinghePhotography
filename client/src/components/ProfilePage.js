import React, {Component} from 'react';
import SimplePaper from './SimplePaper'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './ProfilePage.css'
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import {headers} from '../data/headers';
import PageHeader from './PageHeader';
import ProfilePic from '../images/lahiru.jpg'
import DesktopProfile from './desktop/DesktopProfile'
import {Mobile} from '../functions/helperFunctions'
import {Desktop} from '../functions/helperFunctions'
import MobileProfilePic from '../images/gallery/F1.jpg'
import {makeStyles} from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NavigationIndividual from './NavigationIndividual'

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 991 });
//   return isMobile ? children : null;
// };

const useStyles = makeStyles({
  root: {
    marginTop: 10,
  },
  paper: { //container div with specified dimensions
    width: '95vw',
    height: '87vh'
  },
  img: { //image that needs to fit inside it, cropped
    width: "100%",
    height: "60vh",
    objectFit: 'cover',
    objectPosition: 'top'
  },
  p: {
    width: "100%",
    height: '10vh',
    overflow: 'scroll',
    padding: 10
  },
  spacer:{
    width: '100%',
    height:'1vh'
  }
});

function ProfileText(){
  return (
    <div className="ProfilePage-text">
      <Paper>
        <p>
          Hi, I’m Lahiru. Thank you for visiting Treasurebox Photography!   As
          cheesy as this is, to me, my camera is my treasure box. I use it to
          capture and store the things that are most precious…memories. I would
          love to meet you and your loved ones and create treasures for you too!  
          I have a very relaxed and informal style. My shoots are done in your
          homes, gardens or in outdoor spaces like parks or woods and I do my best
          to make it an enjoyable experience for the whole family. Especially for
          the kids, I have dinosaur knowledge equivalent to a four year old and I
          am an expert at animal sounds!   I am based in Ruislip, West London and will
          happily travel to Harrow, Hillingdon, Buckinghamshire, Hertfordshire and
          West London. If you would like me to create some beautiful images for
          you and your loved ones, please do get in in touch.   I hope you’ll
          invite me to photograph you and your family soon!   Lahiru
        </p>
      </Paper>
    </div>
  );
}

function ProfileImage(){
  const classes = useStyles()

  return (
    <div className="ProfilePage">
      <div className="ProfilePage-image">
        <img src={MobileProfilePic} />
        <div>
          <p>
            <span
              style={{
                fontSize: "2em",
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
            I am a family photographer based in Ruislip, West London and will
            happily travel to Harrow, Hillingdon, Buckinghamshire, Hertfordshire
            and West London. If you would like me to create some beautiful
            portraits for you and your loved ones, please do get in in touch.
          </p>
          <p>
            I have a very relaxed and informal style. My shoots are done in your
            homes, gardens or in outdoor spaces like parks or woods and I do my
            best to make it an enjoyable experience for the whole family. To
            keep your kids engaged, I have dinosaur knowledge equivalent to a
            four year old and am an expert at animal sounds!
          </p>
          <p>
            My camera is my treasure box. I use it to capture and store the
            things that are most precious...memories. I would love to meet you
            and your loved ones and create treasures for you too!
          </p>
          <p>I hope you'll invite me to photograph you and your family soon!</p>
        </div>
      </div>
    </div>
    // <Grid container className={classes.root} justify="center">
    //   <Grid item>
    //     <Paper className={classes.paper} elevation={5}>
    //       <img className={classes.img} src={MobileProfilePic} />
    //       <p className={classes.spacer}></p>
    //       <p className={classes.p}>
    //         Hi, I’m Lahiru. Thank you for visiting Treasurebox Photography! I
    //         have been a photographer for many years and for me, my most
    //         treasured possessions are the photos I have taken of my family. They
    //         show my daughter growing up from a 5lb infant to the little girl she
    //         is today, laughs, tantrums and everything in between! They show my
    //         wife in the multitude of roles that she plays, as a daughter, wife,
    //         creator of life and a mother. They show our parents as they are and
    //         as they were. They are the only images of my late grandmother that
    //         were not taken on a mobile phone. I believe that our family photos
    //         are vital, not only to brighten up our homes, but as the keys to our
    //         memories. I have been fortunate to be able to create beautiful
    //         memories and images for my family. I set up Treasurebox Photography
    //         to do the same for yours. My camera is my treasure box. I use it
    //         capture and store the things that are most precious…memories. I
    //         would love to meet you and your loved ones and create treasures for
    //         you too! I have a very relaxed and informal style. My shoots are
    //         done in homes, gardens and outdoor spaces like parks or woods. I
    //         like to spend some time getting to know you and do my best to make
    //         it an enjoyable experience for everyone. Especially for the kids, I
    //         have dinosaur knowledge equivalent to a four year old and I am an
    //         expert at animal sounds! If you’ve made it to the end, thank you for
    //         reading my ramblings! I hope you’ll invite me to photograph you and
    //         your family soon!
    //       </p>
    //     </Paper>
    //   </Grid>
    // </Grid>
  ); 
}

export default function ProfilePage(props){
  return (
    <div className="ProfilePage">
      <PageHeader header={headers.ProfilePage} />
      <Mobile>
        <div className="ProfilePage-scene">
          <div className="ProfilePage-card">
            <div className="ProfilePage-cardFace card-face-front">
              <ProfileImage />
            </div>
            <div className="ProfilePage-cardFace card-face-back">
              {/* <ContactUser  Form /> */}
            </div>
          </div>
        </div>
      </Mobile>
      {/* <Mobile> */}
      {/* <NavigationIndividual/> */}
      {/* <PageHeader header={headers.ProfilePage} /> */}
      {/* <ProfileImage /> */}
      {/* </Mobile> */}
      {/* <DesktopProfile /> */}
      <Desktop>
        <DesktopProfile desktopLocation={props.location} />
      </Desktop>
    </div>
  );
}


// class ProfilePage extends Component{
//   static defaultProps={
//     headers
//   } 

//   render(){
//         return (
//           <div className="ProfilePage">
//             <div>
//               <Mobile>
//                   <div>
//                   <PageHeader header={this.props.headers.ProfilePage} />
//                 </div>
//                 <div>
//                   <Card elevation={5}>
//                     <CardActionArea>
//                       <CardMedia component="img" height="400" image={ProfilePic} />
//                       <CardContent>
//                         <Typography gutterBottom variant="h5" component="h2">
//                           Lahiru Ranasinghe
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="textSecondary"
//                           component="p"
//                         >
//                           Lahiru is an up and coming Family photographer who
//                           specialises in Portraits, and is just overall awesome.
//                           Contrary to popular belief, Lorem Ipsum is not simply
//                           random text. It has roots in a piece of classical Latin
//                           literature from 45 BC, making it over 2000 years old.
//                           Richard McClintock, a Latin professor at Hampden-Sydney
//                           College in Virginia, looked up one of the more obscure
//                           Latin words, consectetur, from a Lorem Ipsum passage, and
//                           going through the cites of the word in classical
//                           literature, discovered the undoubtable source.
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                   <div className="ProfilePage-icons">
//                     <div>
//                       <FacebookIcon fontSize="large" />
//                     </div>
//                     <div>
//                       <InstagramIcon fontSize="large" />
//                     </div>
//                     <div>
//                       <TwitterIcon fontSize="large" />
//                     </div>
//                   </div>
//                 </div>
//               </Mobile>
//             </div>
//             <div>
//               <DesktopProfile/>
//             </div>
//           </div>
//         );
//     }
// }

// export default ProfilePage;