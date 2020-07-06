// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: '33vw',
//     margin: 5
//   },
// });

// export default function PhotoCard(props) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root} elevation={5}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//         //   height="140"
//           image={props.image}
//         />
//       </CardActionArea>
//     </Card>
//   );
// }

import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import './PhotoCard.css'
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import SlickGalleryCarousel from './SlickGalleryCarousel'
import Container from '@material-ui/core/Container'
import ReactSwipeCarousel from './ReactSwipeCarousel'
import { Mobile } from "../functions/helperFunctions";
import { Desktop } from "../functions/helperFunctions";
// import React_Id_Swiper from './ReactIdSwiper'
// import BootstrapCarousel from './BootstrapCarousel'

const useStyles = makeStyles({
  paper: {
    backgroundColor: 'rgba(0,0,0,0)',
    pointerEvents: 'none',
    boxShadow: 'none',
    
  },
  backdrop: {
    background: 'rgba(0, 0, 0, 0.94)'
    // background: 'rgba(0, 0, 0, 0.94)'
  },
});

export default function PhotoCard(props){
const [open, setOpen] = React.useState(false);

const classes = useStyles();

const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

    return (
      <div className="PhotoCard" style={{ display: "inline-block" }}>
        <Card onClick={handleClickOpen}>
          <Card.Img className="PhotoCard-img" src={props.image} />
        </Card>
        <Dialog
          // onClick={handleClose}
          style={{}}
          open={open}
          onClose={handleClose}
          className="PhotoCard-dialog"
          BackdropProps={{
            classes: {
              root: classes.backdrop,
            },
          }}
          PaperProps={{
            classes: {
              root: classes.paper,
            },
          }}
          // fullWidth={true}
          // maxWidth={true}
          fullScreen={true}
        >
          <Mobile>
            <ReactSwipeCarousel index={props.index} />
          </Mobile>
          <Container className="PhotoCard-container" fluid>
            <Desktop>
              <SlickGalleryCarousel index={props.index} />
            </Desktop>
            {/* <React_Id_Swiper index={props.index}/> */}
          </Container>
          {/* <BootstrapCarousel index={props.index}/> */}
          {/* <img
            style={{
              // maxWidth: "100vw",
              // maxHeight: "70vh",
              // width: "auto",
              // height: "auto",
              maxWidth:'100%',
              maxHeight: '90vh'
            }}
            src={props.image}
          /> */}
          {/* <DialogContent className="content"></DialogContent> */}
        </Dialog>
      </div>
    );
  }

// import React, {Component} from 'react'
// import Card from 'react-bootstrap/Card'
// import './PhotoCard.css'

// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";

// class PhotoCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//     this.handleClickOpen = this.handleClickOpen.bind(this);
//     this.handleClose = this.handleClose.bind(this);
//   }

//   handleClickOpen = () => {
//     this.setState((curState) => ({
//       isOpen: !(curState.isOpen)
//     }));
//   };
//   handleClose = () => {
//     this.setState((curState) => ({
//       isOpen: !(curState.isOpen)
//     }));
//   };

//   render() {
//     return (
//       <div className="PhotoCard">
//         <Card onClick={this.handleClickOpen}>
//           <Card.Img className="PhotoCard-img" src={this.props.image} />
//         </Card>
//         <Dialog
//           // onClick={this.handleClose}
//           open={this.state.isOpen}
//           onClose={this.handleClose}
//           className="dialog"
//         >
//           <img
//             style={{
//               maxWidth: "100vw",
//               maxHeight: "70vh",
//               width: "auto",
//               height: "auto",
//             }}
//             src={this.props.image}
//           />
//           {/* <DialogContent className="content"></DialogContent> */}
//         </Dialog>
//       </div>
//     );
//   }
// }

// export default PhotoCard;