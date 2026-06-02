import "../component/Navbar.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/images/logoing.jpeg";


const Navbar = () => {

    const [scroll, setScroll] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    const { cartItems } = useContext(CartContext);

    useEffect(() => {

        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav className={scroll ? "navbar active" : "navbar"}>

            <div className="logo">
                <img src={logo} alt="RicheySolar Logo" />
                RicheySolar<span>Energy</span>
            </div>

            <ul
                className={
                    menuOpen
                        ? "nav-links active"
                        : "nav-links"
                }
            >

                <li>
                    <a href="#home">Home</a>
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

            <Link to="/cart" className="cart-icon">

                🛒

                <span>
                    ({cartItems.length})
                </span>

            </Link>

            <div
                className="menu-toggle"
                onClick={() =>
                    setMenuOpen(!menuOpen)
                }
            >
                ☰
            </div>

        </nav>

    );
};

export default Navbar;