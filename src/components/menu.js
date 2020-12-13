import React from 'react';
import { Link } from 'gatsby';
import "./menu.scss";
const Menu = () => {
    return(
        <div className="menu-wrapper">
            <Link to="/" className="menu-link-styles"><h4>Home</h4></Link>
            <Link to="/Gallery" className="menu-link-styles"><h4>Gallery</h4></Link>
            <Link to="/About" className="menu-link-styles"><h4>About</h4></Link>
            <Link to="/Contact" className="menu-link-styles"><h4>Contact</h4></Link>
        </div>
    )
}
export default Menu;