import React, { Component } from "react";
import UseCaseHeader from "../components/UseCaseHeader";
import UseCaseCard from "../components/UseCaseCard";

class UseCase extends Component {
  render() {
    return (
      <>
        <UseCaseHeader />
        <UseCaseCard />
      </>
    );
  }
}

export default UseCase;
