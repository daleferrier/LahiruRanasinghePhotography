import React, {useState} from 'react'
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";


export default function MenuDrawer(){
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="Menu-button"
        >
          <MenuIcon />
        </Button>
        <Drawer
          anchor="top"
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
        </Drawer>
      </div>
    );
}