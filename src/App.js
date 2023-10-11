import React from "react";
import "./App.css";
import NavHeader from "./components/NavHeader";
// import Home from "./container/Home";
import UseCase from "./container/UseCase";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavHeader />
      {/* <Home /> */}
      <UseCase />
      <Footer />
    </div>
  );
}

export default App;
