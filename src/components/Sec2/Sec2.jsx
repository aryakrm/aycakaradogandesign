import React from "react";
import { Link } from "react-router-dom";
import "./Sec2.scss";

function Sec2() {
  return (
    <section className="Sec2">
      <div className="Sec2-Left">
        <img
          src="https://i.postimg.cc/pL2BTqkY/aboutPic.jpg"
          alt="Ayça Karadoğan"
        />
      </div>
      <div className="Sec2-Right">
        <h1>Hello!</h1>
        <h2>About Us</h2>
        <p>
          At Ayça Karadoğan Design, we are building a future beyond your dreams.
          Ayça Karadoğan Design has managed to stand out with its different
          lines and extraordinary structures since 2010. We are working to offer
          you the safest and best life above standards. Choose your home, too.
        </p>
        <div>
          <p>
            <span>e-Mail: </span>ayca.y@hotmail.com
          </p>
          <p>
            <span>Phone:</span> +90 533 836 08 15
          </p>
        </div>
        <Link to={"/"}>
          <h1 className="btn">Read More</h1>
        </Link>
      </div>
    </section>
  );
}

export default Sec2;
