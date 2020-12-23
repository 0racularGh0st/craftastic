import React, {useEffect,useState} from 'react';
import { Link } from 'gatsby';
import "./menu.scss";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
const smoothScroll = (target,duration) => {
    target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset -65;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
      if(startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0,run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d){
      t /= d/2;
      if(t<1) return c / 2 * t * t +b;
      t--;
      return -c / 2 * (t * (t-2) - 1) +b;

    }
    requestAnimationFrame(animation);
  }
const toggleBurger = () => {
    const burger = document.querySelector(".burger");
        const menu = document.querySelector(".menu-wrapper");
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
    }
    else {
        menu.classList.add("show");
    }

    if(burger.classList.contains("toggle")){
        burger.classList.remove("toggle");
    }
    else{
        burger.classList.add("toggle");
    }
}
const handleKeyDown = (ev) => {
    // check keys if you want
  if (ev.keyCode === 13) {
     smoothScroll(".contact-section",1000);
     toggleBurger();
   }
}

const Menu = () => {
    const [status,setStatus] = useState("active");
    useEffect(()=>{
        const burger = document.querySelector(".burger");
        const menu = document.querySelector(".menu-wrapper");
        burger.addEventListener("click", () => {
            // menu.classList.toggle("show");
            // //burger animation
            // burger.classList.toggle("toggle");
            if(menu.classList.contains("show")){
                menu.classList.remove("show");
            }
            else {
                console.log("hellow")
                menu.classList.add("show");
            }

            if(burger.classList.contains("toggle")){
                burger.classList.remove("toggle");
            }
            else{
                burger.classList.add("toggle");
            }
          });
    },[status]);
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
            <div className="menu-link-styles contact" onClick={()=>{smoothScroll(".contact-section",1000); toggleBurger();}}  onKeyDown={handleKeyDown}>
                <PermPhoneMsgRoundedIcon className="menu-item-style"/>
                <h4>Contact</h4>
            </div>
        </div>
        </div>
    )
}
export default Menu;