import React, { Component } from "react";
import HeaderBlog from "../components/Blog-comp/HeaderBlog";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import ContentBlog from "../components/Blog-comp/ContentBlog";

class Blog extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <HeaderBlog />
        <ContentBlog />
        <Footer />
      </>
    );
  }
}

export default Blog;
