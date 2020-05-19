import React, {Component} from 'react';
import ImageAvatars from './ImageAvatars';
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


class ProfilePage extends Component{
  static defaultProps={
    headers
  }

  render(){
        return (
          <div className="ProfilePage">
            <div>
              <PageHeader header={this.props.headers.ProfilePage} />
            </div>
            {/* <div className="ProfilePage-avatar">
              <ImageAvatars />
            </div>
            <div className="ProfilePage-paper">
              <SimplePaper />
            </div> */}
            <div>
              <Card elevation={5}>
                <CardActionArea>
                  <CardMedia component="img" height="400" image={ProfilePic} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lahiru Ranasinghe
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lahiru is an up and coming Family photographer who
                      specialises in Portraits, and is just overall awesome.
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <div className="ProfilePage-icons">
                <div>
                  <FacebookIcon fontSize="large" />
                </div>
                <div>
                  <InstagramIcon fontSize="large" />
                </div>
                <div>
                  <TwitterIcon fontSize="large" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ProfilePage;