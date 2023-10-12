import React, { Component } from "react";
import Content1 from "../components/building-owner-comp/Content1";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import Content2 from "../components/building-owner-comp/Content2";
import Content3 from "../components/building-owner-comp/Content3";
import Content4 from "../components/building-owner-comp/Content4";

class Partnership extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Footer />
      </>
    );
  }
}

export default Partnership;
