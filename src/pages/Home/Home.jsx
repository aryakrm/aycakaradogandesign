import React from "react";
import "./Home.scss";
import Intro from "../../components/Intro/Intro";
import Sec2 from "../../components/Sec2/Sec2";

function Home() {
  return (
    <section className="Home">
      <Intro />
      <Sec2 />
    </section>
  );
}

export default Home;
