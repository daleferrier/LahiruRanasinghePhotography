import React, {Component} from 'react';
import ImageAvatars from './ImageAvatars';
import SimplePaper from './SimplePaper'
import './ProfilePage.css'
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

class ProfilePage extends Component{
    render(){
        return (
          <div className="ProfilePage">
            <div className="ProfilePage-avatar">
              <ImageAvatars />
            </div>
            <div className="ProfilePage-paper">
              <SimplePaper />
            </div>

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
        );
    }
}

export default ProfilePage;