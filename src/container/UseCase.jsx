import React, { Component } from "react";
import UseCaseHeader from "../components/UseCaseHeader";
import UseCaseCard from "../components/UseCaseCard";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";

class UseCase extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <UseCaseHeader />
        <UseCaseCard />
        <Footer />
      </>
    );
  }
}

export default UseCase;
