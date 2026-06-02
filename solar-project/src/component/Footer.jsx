import { Link } from "react-router-dom";
import "../component/Footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Company Info */}

                <div className="footer-box">

                    <h2 className="footer-logo">
                        RicheySolar<span>Energy</span>
                    </h2>

                    <p>
                        Premium solar installation, CCTV surveillance
                        and smart automation solutions for homes
                        and businesses.
                    </p>

                    <div className="footer-socials">

                        <a href="#">
                            <FaFacebookF />
                        </a>

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaTwitter />
                        </a>

                        <a href="#">
                            <FaLinkedinIn />
                        </a>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-box">

                    <h3>Quick Links</h3>

                    <ul>

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <a href="#services">Services</a>
                        </li>

                        <li>
                            <a href="#projects">Projects</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>

                    </ul>

                </div>

                {/* Services */}

                <div className="footer-box">

                    <h3>Our Services</h3>

                    <ul>

                        <li>Solar Installation</li>

                        <li>CCTV Surveillance</li>

                        <li>Smart Automation</li>

                        <li>Network Automation</li>

                        <li>Electrical Wiring</li>

                    </ul>

                </div>

                {/* Contact */}

                <div className="footer-box">

                    <h3>Contact Info</h3>

                    <p>
                        <FaPhoneAlt className="footer-icon" />
                        +234 810 928 3387
                    </p>

                    <p>
                        <FaEnvelope className="footer-icon" />
                        info@richeysolar.com
                    </p>

                    <p>
                        <FaMapMarkerAlt className="footer-icon" />
                        Lagos, Nigeria
                    </p>

                </div>

            </div>

            {/* Bottom Footer */}

            <div className="footer-bottom">

                <p>
                    © 2026 RicheySolar Energy. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
};

export default Footer;
