import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.scss";
import { FaInstagram } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [activeNav, setActiveNav] = useState(false);

  const handleHamburger = () => {
    setActiveNav(!activeNav);
  };

  return (
    <section className="Header">
      <nav>
        <div className="navLeft">
          <Link to={"/home"}>
            <img src="/assets/FINALONEw.png" alt="logo" />
          </Link>
          <Link to={"https://www.instagram.com/aycakaradogan/"} target="_blank">
            <FaInstagram />
          </Link>
        </div>
        <div onClick={handleHamburger} className="hamburger">
          <HiMenuAlt3 />
        </div>
      </nav>
      {activeNav && (
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="navMenu"
        >
          <div onClick={handleHamburger} className="hamburger">
            <IoMdClose />
          </div>
          <ul>
            <li>
              <Link to={"/"}>
                <h1>Home</h1>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <h1>Our Desings</h1>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <h1>About Us</h1>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <h1>Contact</h1>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </section>
  );
}

export default Header;
