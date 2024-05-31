import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer() {
    return (
    <div className="footer-container">
        <h1 className="brand"><FontAwesomeIcon icon={faUtensils}/> <span>Recipe</span></h1>
        <div className="follow">
            <h1>Follow Us</h1>
            <ul className="links">
                <li><a href="https://www.facebook.com/profile.php?id=100011406948979"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
            </ul>
        </div>
        <p className="copyright">© Since 2024, By G.Praphul Chandra</p>
    </div>
    );
}
export default Footer;