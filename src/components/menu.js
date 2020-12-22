import React, {useEffect} from 'react';
import { Link } from 'gatsby';
import "./menu.scss";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
const Menu = () => {
    useEffect(()=>{
        const burger = document.querySelector(".burger");
        const menu = document.querySelector(".menu-wrapper");
        burger.addEventListener("click", () => {
            menu.classList.toggle("show");
            //burger animation
            burger.classList.toggle("toggle");
          });
    })
    return(
        <div>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        <div className="menu-wrapper">
            <Link to="/" className="menu-link-styles">
                <HomeRoundedIcon className="menu-item-style"/>
                <h4>Home</h4>
            </Link>
            <Link to="/Gallery" className="menu-link-styles">
                <PhotoCameraRoundedIcon className="menu-item-style"/>
                <h4>Gallery</h4>
            </Link>
            <Link to="/About" className="menu-link-styles">
                <InfoRoundedIcon className="menu-item-style"/>
                <h4>About</h4>
            </Link>
            <Link to="/Contact" className="menu-link-styles">
                <PermPhoneMsgRoundedIcon className="menu-item-style"/>
                <h4>Contact</h4>
            </Link>
        </div>
        </div>
    )
}
export default Menu;