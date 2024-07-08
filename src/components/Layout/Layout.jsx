import React from "react";
import Routers from "../../routers/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default Layout;
