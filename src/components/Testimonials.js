import React from "react";
import "./Testimonials.css";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";
import { testimonials } from "../data/testimonials";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { headers } from "../data/headers";
import PageHeader from "./PageHeader";
import { useMediaQuery } from "react-responsive";
import DesktopTestimonials from "./desktop/DesktopTestimonials";

const useStyles = makeStyles({
  card: {
    maxWidth: "90vw",
    margin: "auto",
    maxHeight: "80vh",
  },
  media: {
    height: "35vh",
  },
  content: {
    height: "35vh",
    overflow: "scroll",
  },
  header: {
    // height: '10vh'
  },
});

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

function Testimonial() {
  const classes = useStyles();
  return (
    <Carousel interval={null} wrap={true} fade={false} indicators={false}>
      {testimonials.map((m) => (
        <Carousel.Item style={{ padding: 40}}>
          <Card elevation={5} className={classes.card}>
            <CardHeader className={classes.header} title={`${m.name}`} />

            <CardMedia
              component="img"
              className={classes.media}
              image={require(`../images/${m.photo}`)}
            />
            {/* <CardMedia image={require(`../images/family.jpg`)}/> */}

            <CardContent className={classes.content}>
              <Typography>
                {m.testimonial}
                {/* There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc. */}
              </Typography>
            </CardContent>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default function Testimonials(props) {
  return (
    <div>
      <PageHeader header={headers.Testimonials}/>
      <Mobile>
        <Testimonial />
      </Mobile>
      <DesktopTestimonials />
    </div>
  );
}

// class Testimonials extends Component{
//     static defaultProps={
//         testimonials,
//         headers
//     }

//     render(){
//         return (
//           <div className="Testimonials">

//             <div>
//               <PageHeader header={this.props.headers.Testimonials}/>
//             </div>
//             <div>
//               <Mobile>
//                   {this.props.testimonials.map((m) => (
//                   <Card
//                     style={{ backgroundColor: "" }}
//                     className="Card"
//                     elevation={5}
//                     style={{ maxWidth: "90%" }}
//                   >
//                     <CardActionArea style={{ display: "" }}>
//                       <CardMedia style={{ textAlign: "center" }}>
//                         <CardContent
//                           style={{
//                             backgroundImage: "url(" + Picture + ")",
//                             height: "30vh",
//                             backgroundSize: "contain",
//                             backgroundRepeat: "no-repeat",
//                             backgroundPosition: "center",
//                           }}
//                         />
//                       </CardMedia>
//                       <CardContent>
//                         <Typography
//                           variant="body2"
//                           color="textSecondary"
//                           component="p"
//                         >
//                           {m.testimonial}
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                     {/* <p>{m}</p> */}
//                   </Card>
//                 ))}
//               </Mobile>
//             </div>
//             <DesktopTestimonials/>
//           </div>
//         );
//     }
// }

// export default Testimonials;
