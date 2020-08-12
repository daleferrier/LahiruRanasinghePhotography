import React, {createRef} from "react";
import Button from "@material-ui/core/Button";
import './Menu.css'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Route, Switch, NavLink} from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PersonIcon from "@material-ui/icons/Person";
import PaymentIcon from "@material-ui/icons/Payment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import RateReviewIcon from "@material-ui/icons/RateReview";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function SimpleMenu() {


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className='Menu-button'
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/">
          {/* <Link smooth={true} to="/gallery/#gallery"> */}
          <HomeIcon /> Home
          {/* </Link> */}
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/gallery">
          {/* <Link smooth={true} to="/gallery/#gallery"> */}
          <PhotoLibraryIcon /> Gallery
          {/* </Link> */}
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/profile">
          {/* <Link smooth={true} to="/gallery/#gallery"> */}
          <PersonIcon /> Profile
          {/* </Link> */}
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/pricing">
          {/* <Link smooth={true} to="/gallery/#gallery"> */}
          <PaymentIcon /> Pricing
          {/* </Link> */}
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/testimonials">
          {/* <Link smooth={true} to="/gallery/#gallery"> */}
          <ReceiptIcon /> Testimonials
          {/* </Link> */}
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/contact">
          {/* <Link smooth={true} to="/gallery/#gallery"> */}
          <EmailIcon /> Get in touch
          {/* </Link> */}
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Link smooth={true} to="/profile">
            <PersonIcon /> Profile
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link smooth={true} to="/pricing">
            <PaymentIcon /> Pricing
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link smooth={true} to="/testimonials">
            <ReceiptIcon /> Testimonials
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link smooth={false} to="/contact">
            <EmailIcon /> Get in touch
          </Link>
        </MenuItem> */}
        {/* <MenuItem onClick={handleClose}>
          <Link smooth={true} to="/review/#review">
            <RateReviewIcon /> Feedback
          </Link>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
