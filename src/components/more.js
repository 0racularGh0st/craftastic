import React from 'react'
import { Link } from 'gatsby';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./more.scss"

const More = () => {
    return (
        <div className="more-container">
            <h3 style={{
                textAlign: "center",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
            }}>Want to see more items? </h3>
            <h4 style={{textAlign:"center",color:"rgb(113, 113, 113)"}}>Go to the 
                <div style={{display:"inline-block"}}>
                <Link to="/Gallery">
                <h4 className="more-link">Gallery <ExitToAppIcon className="more-link-icon"/></h4>
                 </Link>
               </div>
            </h4>

            <h3 style={{
                textAlign: "center",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
            }}>Want to place an order? </h3>
            <h4 style={{textAlign:"center",color:"rgb(113, 113, 113)"}}>Take a screenshot of what you want and Contact Us
            </h4>
            <h4 className="contact-info">DM us on
                <a href="https://www.instagram.com/_craftastic_09/" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="contact-icon"> 
                    <img src="./instagram.png" height="30" width="30" alt="instagram" aria-label="instagram" style={{margin:"0 4px"}}/>
                </a>
            </h4>
            <h4 className="contact-info">Chat with us on
                <a href="https://api.whatsapp.com/send?phone=917085562703" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="contact-icon"> 
                    <img src="./whatsapp.png" height="30" width="30" alt="whatsapp" aria-label="whatsapp" style={{margin:"0 4px"}}/>
                </a>
            </h4>
            
        </div>
    )
}

export default More;