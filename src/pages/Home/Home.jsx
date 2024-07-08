import React from "react";
import "./Home.scss";
import Intro from "../../components/Intro/Intro";
import Sec2 from "../../components/Sec2/Sec2";
import Sec3 from "../../Sec3/Sec3";

function Home() {
  return (
    <section className="Home">
      <Intro />
      <Sec2 />
      <Sec3 />
    </section>
  );
}

export default Home;
