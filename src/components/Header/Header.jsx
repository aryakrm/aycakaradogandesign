import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FaInstagram } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

function Header() {
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
        <HiMenuAlt3 />
      </nav>
      <div className="navMenu"></div>
    </section>
  );
}

export default Header;
