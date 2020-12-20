import React from 'react';
import { Link } from 'gatsby';
import "./menu.scss";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
const Menu = () => {
    return(
        <div className="menu-wrapper">
            <Link to="/" className="menu-link-styles">
                <HomeRoundedIcon style={{color:"white",fontSize:"18px"}}/>
                <h4>Home</h4>
            </Link>
            <Link to="/Gallery" className="menu-link-styles">
                <PhotoCameraRoundedIcon style={{color:"white",fontSize:"18px"}}/>
                <h4>Gallery</h4>
            </Link>
            <Link to="/About" className="menu-link-styles">
                <InfoRoundedIcon style={{color:"white",fontSize:"18px"}}/>
                <h4>About</h4>
            </Link>
            <Link to="/Contact" className="menu-link-styles">
                <PermPhoneMsgRoundedIcon style={{color:"white",fontSize:"18px"}}/>
                <h4>Contact</h4>
            </Link>
        </div>
    )
}
export default Menu;